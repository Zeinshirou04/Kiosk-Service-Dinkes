<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MasterKotaKab extends Model
{
    protected $table = 'master_kota_kab';

    protected $fillable = [
        'kode_kota_kab',
        'kode_parent',
        'kode_bps',
        'nama',
        'created_at',
        'updated_at',
    ];
}
