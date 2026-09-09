<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MasterProvinsi extends Model
{
    protected $table = 'master_provinsi';

    protected $fillable = [
        'kode_provinsi',
        'kode_parent',
        'kode_bps',
        'nama',
        'created_at',
        'updated_at',
    ];
}
