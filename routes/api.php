<?php

use App\Http\Controllers\Device\DeviceDataController;
use App\Http\Controllers\Device\TensionDataController;
use App\Http\Controllers\KoperSakti\KoperSaktiController;
use App\Http\Controllers\V2\Api\PatientCollaborationController;
use App\Http\Controllers\V2\Measure\PatientPrintController;
use App\Http\Middleware\ConfirmJsonContentType;
use Illuminate\Support\Facades\Route;

Route::middleware([ConfirmJsonContentType::class])->group(function () {
    Route::apiResource('device', DeviceDataController::class)->except([
        'index', 'create', 'edit', 'update', 'destroy',
    ]);
    Route::apiResource('tension', TensionDataController::class)->except([
        'index', 'create', 'edit', 'update', 'destroy',
    ]);
    Route::prefix('v2')->group(function () {
        Route::get('print/pdf/{nik}', [PatientPrintController::class, 'printPDF'])->name('patient.print.pdf');
    });
});

Route::middleware(['throttle:60,1', 'api.key'])->group(function () {
    Route::post('koper-sakti', [KoperSaktiController::class, 'store']);
});

Route::get('patient/by/{nik}', [PatientCollaborationController::class, 'getPatientByNik'])->name('patient.by.nik');

Route::get('patient/all', [PatientCollaborationController::class, 'getPatientAll'])->name('patient.all');
