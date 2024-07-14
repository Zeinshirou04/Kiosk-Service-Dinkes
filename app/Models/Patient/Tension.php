<?php

namespace App\Models\Patient;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tension extends Model
{
    use HasFactory;

    protected $table = 'tension';

    protected $fillable = [
        'dev_id',
        'b_atas',
        'b_bawah',
        'denyut'
    ];
}
