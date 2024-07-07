<?php

namespace App\Models\Patient;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Measure extends Model
{
    use HasFactory;

    protected $fillable = [
        'nik',
        'gula',
        'berat',
        'tinggi',
        'dev_id'
    ];

    public function patients() {
        return $this->belongsTo('patients');
    }
}
