<?php

namespace App\Http\Controllers\v2;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Patient\Measure;
use App\Models\Patient\MeasureGlucose;
use App\Models\Patient\MeasureTension;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{

    private $data = [];

    public function index(Request $request) {


        try {
            //code...
            if(Auth::check()) $patient = Auth::user();
    
            $this->data = [
                'nik' => $patient->nik,
                'no_hp' => $patient->no_hp,
                'state' => $request->state
            ];
            switch ($request->state) {
                case 'glucose':
                    # code...
                    $this->isGlucose($patient->nik);
                    break;

                case 'blood':
                    $this->isBlood($patient->nik);
                    break;

                case 'confirmation':
                    $this->isConfirmation($patient->nik);
                    break;
                
                default:
                    # code...
                    break;
            }
        } catch (\Throwable $th) {

        }

        return Inertia::render('V2/Home', $this->data);
    }

    public function isGlucose($nik) {
        $prevMeasure = Measure::where('nik', $nik)->select('berat', 'tinggi')->latest()->first();
        $this->data = array_merge($this->data, ['measure' => [
            'berat' => $prevMeasure->berat,
            'tinggi' => $prevMeasure->tinggi,
        ]]);
    }

    public function isBlood($nik) {
        $prevMeasure = MeasureGlucose::where('nik', $nik)->select('glucose')->latest()->first();
        $this->data = array_merge($this->data, ['measure' => [
            'glucose' => $prevMeasure->glucose,
        ]]);
    }

    public function isConfirmation($nik) {
        $prevMeasure = MeasureTension::where('nik', $nik)->select('b_atas', 'b_bawah', 'denyut')->latest()->first();
        $this->data = array_merge($this->data, ['measure' => [
            'b_atas' => $prevMeasure->b_atas,
            'b_bawah' => $prevMeasure->b_bawah,
            'denyut' => $prevMeasure->denyut,
        ]]);
    }
}
