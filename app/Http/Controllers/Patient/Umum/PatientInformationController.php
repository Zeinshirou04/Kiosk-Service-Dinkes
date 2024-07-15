<?php

namespace App\Http\Controllers\Patient\Umum;

use App\Http\Controllers\Controller;
use App\Models\Patient\Measure;
use App\Models\Patient\MeasureTension;
use App\Models\Patient\Patients;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Inertia\Inertia;

class PatientInformationController extends Controller
{
    //
    public function index()
    {
        // dd($hash);
        return Inertia::render('Pasien/CariPasien');
    }

    public function find(Request $request) {
        // dd(Patients::select('nik')->where('nik', $request->nik)->first()->toArray());
        try {            
            $pasien = Patients::select('nik')->where('nik', $request->nik)->first()->toArray();
            $hash = Crypt::encrypt($pasien['nik']);
            // dd($hash);
            return redirect(route('pasien.index', $hash));
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function show(string $hash) {
        // dd($hash);
        $nik = Crypt::decrypt($hash);
        $data = [
            'pasien' => Patients::where('nik', $nik)->first()->toArray(),
            'rekap' => Measure::where('nik', $nik)->orderBy('created_at', 'desc')->get(),
            'tensi' => MeasureTension::where('nik', $nik)->orderBy('created_at', 'desc')->get()
        ];
        // dd($data);
        return Inertia::render('Pasien/Umum/InformasiPasien', $data);
    }
}
