<?php

namespace App\Http\Controllers\v2;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\MasterKotaKab;
use App\Models\MasterKecamatan;
use App\Models\MasterKelurahan;

class WilayahController extends Controller
{

    public function kota($provinsi)
    {
        return MasterKotaKab::where(
                'kode_parent',
                $provinsi
            )
            ->select(
                'kode_kota_kab',
                'nama'
            )
            ->orderBy('nama')
            ->get();
    }


    public function kecamatan($kota)
    {
        return MasterKecamatan::where(
                'kode_parent',
                $kota
            )
            ->select(
                'kode_kecamatan',
                'nama'
            )
            ->orderBy('nama')
            ->get();
    }


    public function kelurahan($kecamatan)
    {
        return MasterKelurahan::where(
                'kode_parent',
                $kecamatan
            )
            ->select(
                'kode_kelurahan',
                'nama'
            )
            ->orderBy('nama')
            ->get();
    }

}
