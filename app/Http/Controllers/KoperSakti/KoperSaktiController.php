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
        $data = $request->all();

        $tanggal = Carbon::parse($request->tanggal_pengukuran)
            ->format('Y-m-d H:i:s');

        KoperSakti::create([
            'nama_pasien' => strip_tags($data['nama_pasien']),
            'nik' => strip_tags($data['nik']),
            'jenis_kelamin' => strip_tags($data['jenis_kelamin']),
            'umur' => (int) $data['umur'],
            'kecamatan' => strip_tags($data['kecamatan']),
            'kelurahan' => strip_tags($data['kelurahan']),
            'alamat' => strip_tags($data['alamat']),
            'tanggal_pengukuran' => $tanggal,
            'kolesterol' => (float) $data['kolesterol'],
            'asam_urat' => (float) $data['asam_urat'],
            'gula_darah' => (float) $data['gula_darah'],
            'tensi_sys' => (int) $data['tensi_sys'],
            'tensi_dia' => (int) $data['tensi_dia'],
            'tinggi_badan' => (float) $data['tinggi_badan'],
            'berat_badan' => (float) $data['berat_badan'],
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Data berhasil disimpan',
        ]);
    }
}
