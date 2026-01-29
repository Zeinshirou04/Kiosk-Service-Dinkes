<?php

namespace App\Http\Controllers\KoperSakti;

use App\Http\Controllers\Controller;
use App\Models\KoperSakti;
use Carbon\Carbon;
use Illuminate\Http\Request;

class KoperSaktiController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama_pasien' => 'required|string|max:255',
            'id_koper' => 'required|string|max:255',
            'puskesmas' => 'required|string|max:255',
            'nik' => 'required|string|size:16',
            'jenis_kelamin' => 'required|in:Laki-laki,Perempuan',
            'umur' => 'required|string|max:20',
            'kecamatan' => 'required|string|max:100',
            'kelurahan' => 'required|string|max:100',
            'alamat' => 'required|string|max:500',
            'tanggal_pengukuran' => 'required|date',
            'kolesterol' => 'required|numeric|min:0',
            'asam_urat' => 'required|numeric|min:0',
            'gula_darah' => 'required|numeric|min:0',
            'tensi_sys' => 'required|integer|min:0|max:300',
            'tensi_dia' => 'required|integer|min:0|max:300',
            'tinggi_badan' => 'required|numeric|min:0|max:300',
            'berat_badan' => 'required|numeric|min:0|max:500',
        ]);

        $tanggal = Carbon::parse($validated['tanggal_pengukuran'])
            ->format('Y-m-d H:i:s');

        KoperSakti::create([
            'nama_pasien' => strip_tags($validated['nama_pasien']),
            'id_koper' => strip_tags($validated['id_koper']),
            'puskesmas' => strip_tags($validated['puskesmas']),
            'nik' => strip_tags($validated['nik']),
            'jenis_kelamin' => strip_tags($validated['jenis_kelamin']),
            'umur' => (int) $validated['umur'],
            'kecamatan' => strip_tags($validated['kecamatan']),
            'kelurahan' => strip_tags($validated['kelurahan']),
            'alamat' => strip_tags($validated['alamat']),
            'tanggal_pengukuran' => $tanggal,
            'kolesterol' => (float) $validated['kolesterol'],
            'asam_urat' => (float) $validated['asam_urat'],
            'gula_darah' => (float) $validated['gula_darah'],
            'tensi_sys' => (int) $validated['tensi_sys'],
            'tensi_dia' => (int) $validated['tensi_dia'],
            'tinggi_badan' => (float) $validated['tinggi_badan'],
            'berat_badan' => (float) $validated['berat_badan'],
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Data berhasil disimpan',
        ]);
    }
}
