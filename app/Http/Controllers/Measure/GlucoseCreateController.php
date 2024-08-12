<?php

namespace App\Http\Controllers\Measure;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreGlucoseRequest;
use App\Models\Patient\Patients;
use Illuminate\Http\Request;

class GlucoseCreateController extends Controller
{
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreGlucoseRequest $request)
    {
        // dd(!Patients::where('nik', $request->nik)->exists());
        if(!Patients::where('nik', $request->nik)->exists()) return redirect()->back()->with('error', ['nik', 'NIK Belum Terdaftar']);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }
}
