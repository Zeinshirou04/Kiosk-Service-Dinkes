<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MasterKelurahan extends Model
{
    protected $table = 'master_kelurahan';

    protected $fillable = [
        'kode_kelurahan',
        'kode_parent',
        'kode_bps',
        'nama',
        'created_at',
        'updated_at',
    ];
}
