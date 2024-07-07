<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\ConfirmJsonContentType;
use App\Http\Controllers\Device\DeviceDataController;

Route::middleware([ConfirmJsonContentType::class])->group(function () {
    Route::apiResource('device', DeviceDataController::class)->except([
        'index', 'create', 'edit', 'update', 'destroy'
    ]);
});

