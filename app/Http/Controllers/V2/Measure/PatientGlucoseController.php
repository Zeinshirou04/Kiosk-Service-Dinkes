<?php

namespace App\Http\Controllers\V2\Measure;

use App\Http\Controllers\Controller;
use App\Models\Patient\MeasureGlucose;
use Illuminate\Http\Request;

class PatientGlucoseController extends Controller
{

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->toArray();
        try {
            MeasureGlucose::create($data);
            return redirect()->to(route('v2.home.index', ['state' => 'blood']));
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $glucose = MeasureGlucose::where('nik', $id)->select('glucose')->latest()->first();
        dd($glucose);
    }
}
