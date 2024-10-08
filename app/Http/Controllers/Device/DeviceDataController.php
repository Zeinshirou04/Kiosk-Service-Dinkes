<?php

namespace App\Http\Controllers\Device;

use Carbon\Carbon;
use App\Models\Device\Data;
use Illuminate\Http\Request;
use App\Models\Device\Device;
use App\Http\Controllers\Controller;

class DeviceDataController extends Controller
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
        $measure = Data::create(
            [
                'dev_id' => $request->id,
                'gula' => $request->gula,
                'berat' => $request->berat,
                'tinggi' => $request->tinggi,
                'updated_at' => Carbon::now()
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
                'data' => Data::where('dev_id', $id)
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
