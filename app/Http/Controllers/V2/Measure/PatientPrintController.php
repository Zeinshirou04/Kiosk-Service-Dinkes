<?php

namespace App\Http\Controllers\V2\Measure;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB; // Gunakan DB Facade agar lebih fleksibel

class PatientPrintController extends Controller
{
    public function getSummary()
    {
        try {
            // --- 1. CEK LOGIN (Sesuai Server) ---
            // Kita gunakan data dari User yang sedang login
            if (!Auth::check()) {
                return response()->json(['message' => 'User session expired/not logged in'], 401);
            }

            $user = Auth::user();
            $nik = $user->nik;
            
            // Nama diambil dari data user server
            $namaPasien = $user->nama_pasien ?? $user->name ?? 'Pasien'; 

            // --- 2. AMBIL DATA DARI 3 TABEL (Sesuai Local) ---
            // Menggunakan DB::table agar aman jika Model belum dibuat di server
            
            // A. Berat & Tinggi (Tabel: measure)
            $weightData = DB::table('measure')
                            ->where('nik', $nik)
                            ->latest()
                            ->first();
            
            // Fallback: Jika tabelnya bernama 'measure_weights' (bawaan server lama)
            if (!$weightData) {
                $weightData = DB::table('measure_weights')->where('nik', $nik)->latest()->first();
            }

            // B. Gula Darah (Tabel: glucose_measure)
            $glucoseData = DB::table('glucose_measure')
                            ->where('nik', $nik)
                            ->latest()
                            ->first();

            // C. Tensi (Tabel: tension_measure) - INI YANG SEBELUMNYA HILANG DI SERVER
            $tensiData = DB::table('tension_measure')
                            ->where('nik', $nik)
                            ->latest()
                            ->first();

            // --- 3. OLAH DATA (Sesuai Logic Local) ---

            // >> Logic Berat & Tinggi
            $tinggi = $weightData->tinggi ?? $weightData->height ?? 0;
            $berat  = $weightData->berat ?? $weightData->weight ?? 0;
            $bmi    = '-';
            $bmiKet = '-';

            if ($tinggi > 0 && $berat > 0) {
                $tbM = $tinggi / 100;
                $bmiVal = $berat / ($tbM * $tbM);
                $bmi = number_format($bmiVal, 1);
                
                if ($bmiVal < 18.5) $bmiKet = 'Kurus';
                elseif ($bmiVal <= 25) $bmiKet = 'Normal';
                elseif ($bmiVal <= 29.9) $bmiKet = 'Gemuk';
                else $bmiKet = 'Obesitas';
            }

            // >> Logic Gula Darah
            $gulaVal = $glucoseData->glucose ?? $glucoseData->glukosa ?? 0;
            $gulaKet = '-';

            if ($gulaVal > 0) {
                if ($gulaVal < 70) $gulaKet = 'Rendah';
                elseif ($gulaVal <= 200) $gulaKet = 'Normal'; 
                else $gulaKet = 'Tinggi';
            }

            // >> Logic Tensi (b_atas & b_bawah)
            // Kita cek berbagai kemungkinan nama kolom (b_atas, sistole, systole)
            $sys = $tensiData->b_atas ?? $tensiData->sistole ?? $tensiData->systole ?? '-';
            $dia = $tensiData->b_bawah ?? $tensiData->diastole ?? $tensiData->diastole ?? '-';
            
            // Pastikan tidak tampil 0 jika data kosong
            if ($sys === 0 || $sys === '0') $sys = '-';
            if ($dia === 0 || $dia === '0') $dia = '-';
            
            $tensiStr = "$sys/$dia";

            // --- 4. RETURN RESPONSE (Format JSON Sesuai Local) ---
            return response()->json([
                // Identitas dari Server
                'nama' => $namaPasien,
                'nik' => $nik,
                'tanggal' => date('d-m-Y H:i'),
                
                // Data Hasil Pengukuran
                'tinggi' => $tinggi,
                'berat' => $berat,
                'bmi' => $bmi,
                'bmi_ket' => $bmiKet,

                'gula' => $gulaVal,
                'gula_ket' => $gulaKet,

                'tensi' => $tensiStr,
                // Kirim juga data mentah untuk frontend jika butuh pewarnaan
                'sistole' => $sys,
                'diastole' => $dia
            ]);

        } catch (\Throwable $e) {
            Log::error("Print Summary Error: " . $e->getMessage());
            return response()->json(['message' => 'Server Error', 'detail' => $e->getMessage()], 500);
        }
    }
}