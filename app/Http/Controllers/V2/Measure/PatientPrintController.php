<?php

namespace App\Http\Controllers\V2\Measure;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log; // Tambahkan Log
use App\Models\Patient\MeasureGlucose;
use App\Models\Patient\MeasureWeight;

class PatientPrintController extends Controller
{
    public function getSummary()
    {
        try {
            // 1. Cek Login
            if (!Auth::check()) {
                return response()->json(['message' => 'User session expired/not logged in'], 401);
            }

            $user = Auth::user();

            // 2. Ambil Data (Gunakan try-catch per item agar jika satu tabel hilang, tidak mati semua)
            $weightData = null;
            try {
                // Pastikan Model MeasureWeight BENAR-BENAR ADA
                if (class_exists(MeasureWeight::class)) {
                    $weightData = MeasureWeight::where('nik', $user->nik)->latest()->first();
                }
            } catch (\Throwable $t) {
                Log::error("Error ambil berat: " . $t->getMessage());
            }

            $glucoseData = null;
            try {
                $glucoseData = MeasureGlucose::where('nik', $user->nik)->latest()->first();
            } catch (\Throwable $t) {
                Log::error("Error ambil gula: " . $t->getMessage());
            }

            // 3. Hitung Logika (Safe Mode)
            $bmi = '-';
            $bmiKet = '-';
            $tinggi = '-';
            $berat = '-';

            if ($weightData) {
                $tinggi = $weightData->height ?? '-';
                $berat = $weightData->weight ?? '-';
                
                if (is_numeric($tinggi) && is_numeric($berat) && $tinggi > 0) {
                    $heightM = $tinggi / 100;
                    $bmiVal = $berat / ($heightM * $heightM);
                    $bmi = number_format($bmiVal, 1);
                    
                    if ($bmiVal < 18.5) $bmiKet = 'Kurus';
                    elseif ($bmiVal < 25) $bmiKet = 'Normal';
                    elseif ($bmiVal < 30) $bmiKet = 'Gemuk';
                    else $bmiKet = 'Obesitas';
                }
            }

            $gulaVal = '-';
            $gulaKet = '-';
            if ($glucoseData) {
                $gulaVal = $glucoseData->glucose ?? '-';
                if (is_numeric($gulaVal)) {
                    if ($gulaVal < 70) $gulaKet = 'Rendah';
                    elseif ($gulaVal <= 200) $gulaKet = 'Normal';
                    else $gulaKet = 'Tinggi';
                }
            }

            return response()->json([
                'nama' => $user->nama_pasien ?? 'Pasien',
                'tanggal' => now()->format('d-m-Y H:i'),
                'tinggi' => $tinggi,
                'berat' => $berat,
                'bmi' => $bmi,
                'bmi_ket' => $bmiKet,
                'gula' => $gulaVal,
                'gula_ket' => $gulaKet,
                'tensi' => '-', 
            ]);

        } catch (\Throwable $mainError) {
            // Tangkap Error Fatal Controller
            Log::error("Print Controller Error: " . $mainError->getMessage());
            return response()->json([
                'message' => 'Server Error: ' . $mainError->getMessage()
            ], 500);
        }
    }
}