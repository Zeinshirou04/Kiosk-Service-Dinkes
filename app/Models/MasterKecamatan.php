<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MasterKecamatan extends Model
{
    protected $table = 'master_kecamatan';

    protected $fillable = [
        'kode_kecamatan',
        'kode_parent',
        'kode_bps',
        'nama',
        'created_at',
        'updated_at',
    ];
}
