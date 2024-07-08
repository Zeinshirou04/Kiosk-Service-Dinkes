<?php

namespace App\Http\Controllers\Patient\Umum;

use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Patient\Measure;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Crypt;

class PatientMeasureController extends Controller
{
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Pasien/Umum/PengukuranUmum');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->toArray());
        $data = $request->toArray();
        $data['created_at'] = Carbon::now()->format('Y-m-d h:i:s');
        $data['updated_at'] = Carbon::now()->format('Y-m-d h:i:s');
        // dd($data);
        try {
            Measure::create($data);
            $hash = Crypt::encrypt($request->nik);
            // dd($hash);
            return redirect(route('pasien.index', $hash));
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
