<?php

namespace App\Models\Patient;

use Illuminate\Auth\Middleware\Authenticate;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;

class Patients extends Authenticatable
{
    use HasFactory;

    // protected $primaryKey = 'nik';

    protected $table = "patients_new";

    protected $fillable = [
        'nik',
        'nama_pasien',
        'jenis_kelamin',
        'tgl_lahir',
        'kecamatan',
        'kelurahan',
        'kabkota',
        'alamat',
        'no_hp'
    ];

    public function measure() {
        return $this->hasMany('measure');
    }

    public function glucose_measure() {
        return $this->hasMany('glucose_measure');
    }
}
