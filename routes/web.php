<?php

use App\Http\Controllers\Home\MenuController;
use App\Http\Controllers\Measure\GlucoseCreateController;
use App\Http\Controllers\Patient\Umum\PatientInformationController;
use App\Http\Controllers\Patient\Umum\PatientMeasureController;
use App\Http\Controllers\Patient\Umum\PatientRegisterController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\v2\HomeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [MenuController::class, 'index'])->name('menu.index');

Route::prefix('umum')->group(function () {
    Route::get('/', [MenuController::class, 'umum'])->name('menu.umum');
    Route::resource('/pendaftaran', PatientRegisterController::class)->only([
        'create', 'store'
    ]);
    Route::resource('/pengukuran', PatientMeasureController::class)->only([
        'create', 'store', 'show'
    ]);
    Route::resource('/glucose', GlucoseCreateController::class)->only([
        'create', 'store', 'show'
    ]);
    Route::get('/cari', [PatientInformationController::class, 'index'])->name('pasien.cari');
    Route::post('/cari', [PatientInformationController::class, 'find'])->name('pasien.encrypt');
    Route::get('/pasien/{hash}', [PatientInformationController::class, 'show'])->name('pasien.index');
});

Route::get('/bpjs', [MenuController::class, 'bpjs'])->name('menu.bpjs');
Route::get('/asuransi', [MenuController::class, 'asuransi'])->name('menu.asuransi');
Route::get('/lansia', [MenuController::class, 'lansia'])->name('menu.lansia');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('v2')->group(function () {
    Route::get('/', [HomeController::class, 'index'])->name('v2.home.index');
});

require __DIR__.'/auth.php';
