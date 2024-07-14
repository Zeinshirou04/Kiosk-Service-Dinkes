<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\ConfirmJsonContentType;
use App\Http\Controllers\Device\DeviceDataController;
use App\Http\Controllers\Device\TensionDataController;

Route::middleware([ConfirmJsonContentType::class])->group(function () {
    Route::apiResource('device', DeviceDataController::class)->except([
        'index', 'create', 'edit', 'update', 'destroy'
    ]);
    Route::apiResource('tension', TensionDataController::class)->except([
        'index', 'create', 'edit', 'update', 'destroy'
    ]);
});

