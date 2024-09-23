<?php

namespace App\Http\Controllers\V2\Measure;

use App\Http\Controllers\Controller;
use App\Models\Patient\Measure;
use Illuminate\Http\Request;

class PatientWeightController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->toArray();
        array_push($data, ['glukosa' => null]);
        try {
            Measure::create($data);
            return redirect()->to(route('v2.home.index', ['state' => 'glucose']));
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
