<?php

namespace App\Http\Controllers\Device;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Device\Device;
use App\Models\Patient\Tension;
use App\Http\Controllers\Controller;

class TensionDataController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if (!Device::find($request->id)) return response()->json([
            'message' => 'Device is not registered, please ask the Admin to register a new device'
        ], 400);
        // return response()->json($request->except('wac'));
        $measure = Tension::create(
            [
                'dev_id' => $request->id,
                'b_atas' => $request->b_atas,
                'b_bawah' => $request->b_bawah,
                'denyut' => $request->denyut,
            ]
        );
        try {
            $measure;
            return response()->json([
                'message' => 'Content saved successfully!',
                'saved_at' => Carbon::now()
            ], 200);
        } catch (\Throwable $th) {
            return response()->json(
                [
                    'error' => $th['error']
                ],
                500
            );
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $data = [
                'status' => 'berhasil!',
                'data' => Tension::where('dev_id', $id)
                    ->orderBy('created_at', 'desc')
                    ->first()
                    ->toArray()
            ];
        } catch (\Throwable $th) {
            $data = [
                'status' => 'data tidak ditemukan',
                'data' => 'null',
            ];
        }
        return response()->json($data);
    }
}
