<?php

namespace App\Models\Device;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Device extends Model
{
    use HasFactory;

    public function measure() {
        return $this->hasMany('measure');
    }

    public function data() {
        return $this->hasMany('d_data');
    }
}
