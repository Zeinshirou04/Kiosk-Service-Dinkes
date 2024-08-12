<?php

namespace App\Models\Patient;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MeasureGlucose extends Model
{
    use HasFactory;

    protected $table = 'glucose_measure';

    protected $fillable = [
        'nik',
        'glucose',
        'dev_id'
    ];
}
