<?php

namespace App\Http\Controllers\V2\Measure;

use App\Http\Controllers\Controller;
use App\Models\Patient\MeasureTension;
use Illuminate\Http\Request;

class PatientTensionController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->toArray();
        // dd($data);
        try {
            MeasureTension::create($data);
            return redirect()->to(route('v2.home.index', ['state' => 'confirmation']));
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }
}
