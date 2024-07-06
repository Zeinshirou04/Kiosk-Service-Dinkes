<?php

namespace App\Models\Device;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Data extends Model
{
    use HasFactory;

    protected $table = 'd_data';

    protected $fillable = [
        'dev_id',
        'gula',
        'berat',
        'tinggi'
    ];
}
