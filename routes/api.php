<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\ConfirmJsonContentType;
use App\Http\Controllers\Device\DeviceDataController;
use App\Http\Controllers\Device\TensionDataController;
use App\Http\Controllers\V2\Api\PatientCollaborationController;
use App\Http\Controllers\V2\Measure\PatientGlucoseController;
use App\Http\Controllers\V2\Measure\PatientPrintController;
use App\Http\Controllers\V2\Measure\PatientTensionController;
use App\Http\Controllers\V2\Measure\PatientWeightController;

Route::middleware([ConfirmJsonContentType::class])->group(function () {
    Route::apiResource('device', DeviceDataController::class)->except([
        'index', 'create', 'edit', 'update', 'destroy'
    ]);
    Route::apiResource('tension', TensionDataController::class)->except([
        'index', 'create', 'edit', 'update', 'destroy',
    ]);
    Route::prefix('v2')->group(function () {
        Route::get('print/pdf/{nik}', [PatientPrintController::class, 'printPDF'])->name('patient.print.pdf');
    });
});

Route::get('patient/akmAPIkey/by/{nik}', [PatientCollaborationController::class, 'getPatientByNik'])->name('patient.by.nik');

Route::get('patient/akmAPIkey/all', [PatientCollaborationController::class, 'getPatientAll'])->name('patient.all');

