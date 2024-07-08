<?php

namespace App\Http\Controllers\Patient\Umum;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePatientRequest;
use App\Models\Patient\Patients;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PatientRegisterController extends Controller
{
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Pasien/DaftarPasien');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(StorePatientRequest $request)
    {
        try {
            Patients::create($request->all());
            return redirect(route('pengukuran.create'));
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
