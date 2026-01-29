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
            'nama_pasien' => $data['nama_pasien'],
            'nik' => $data['nik'],
            'jenis_kelamin' => $data['jenis_kelamin'],
            'umur' => $data['umur'],
            'kecamatan' => $data['kecamatan'],
            'kelurahan' => $data['kelurahan'],
            'alamat' => $data['alamat'],
            'tanggal_pengukuran' => $tanggal,
            'kolesterol' => $data['kolesterol'],
            'asam_urat' => $data['asam_urat'],
            'gula_darah' => $data['gula_darah'],
            'tensi_sys' => $data['tensi_sys'],
            'tensi_dia' => $data['tensi_dia'],
            'tinggi_badan' => $data['tinggi_badan'],
            'berat_badan' => $data['berat_badan'],
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Data berhasil disimpan',
        ]);
    }
}
