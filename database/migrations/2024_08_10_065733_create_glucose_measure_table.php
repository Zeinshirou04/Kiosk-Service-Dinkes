<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('glucose_measure', function (Blueprint $table) {
            $table->id();
            $table->char('nik', 16);
            $table->decimal('glucose', 5, 2)->default(0.0);
            $table->foreignUuid('dev_id')->references('id')->on('devices');
            $table->timestamps();

            $table->foreign('nik')->references('nik')->on('patients');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('glucose_measure');
    }
};
