<?php

namespace App\Http\Controllers\V2\Api;

use App\Http\Controllers\Controller;
use App\Models\Patient\Patients;
use Illuminate\Http\Request;

class PatientCollaborationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
    }

    public function getPatientByNik(Request $request) {
        $result = Patients::where('nik', $request->nik)->get();
        try {
            $res = [
                    'message' => 'Data berhasil diterima',
                    'data' => $result 
            ];
            return response()->json($res, 200);
        } catch (\Throwable $th) {
            $res = [
                    'message' => 'Data tidak berhasil diterima',
                    'error' => $th->getMessage() 
            ];
            return response()->json($res, 500);
        }
    }
    
    public function getPatientAll() {
        $result = Patients::all();  
        
        try {
            $res = [
                    'message' => 'Data berhasil diterima',
                    'data' => $result 
            ];
            return response()->json($res, 200);
        } catch (\Throwable $th) {
            $res = [
                    'message' => 'Data tidak berhasil diterima',
                    'error' => $th->getMessage() 
            ];
            return response()->json($res, 500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
