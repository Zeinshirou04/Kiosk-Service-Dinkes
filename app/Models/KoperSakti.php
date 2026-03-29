<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KoperSakti extends Model
{
    protected $table = 'koper_sakti';

    protected $fillable = [
        'nama_pasien',
        'id_koper',
        'puskesmas',
        'nik',
        'jenis_kelamin',
        'umur',
        'kecamatan',
        'kelurahan',
        'alamat',
        'tanggal_pengukuran',
        'kolesterol',
        'asam_urat',
        'gula_darah',
        'tensi_sys',
        'tensi_dia',
        'tinggi_badan',
        'berat_badan',
    ];
}
