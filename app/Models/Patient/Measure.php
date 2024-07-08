<?php

namespace App\Models\Patient;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Measure extends Model
{
    use HasFactory;

    protected $table = 'measure';

    protected $fillable = [
        'nik',
        'gula',
        'berat',
        'tinggi',
        'dev_id',
        'created_at',
        'updated_at',
    ];

    public function patients() {
        return $this->belongsTo('patients');
    }
}
