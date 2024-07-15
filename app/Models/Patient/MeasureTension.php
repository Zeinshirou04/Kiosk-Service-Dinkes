<?php

namespace App\Models\Patient;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MeasureTension extends Model
{
    use HasFactory;

    protected $table = 'tension_measure';

    protected $fillable = [
        'nik',
        'b_atas',
        'b_bawah',
        'denyut',
        'dev_id'
    ];
}
