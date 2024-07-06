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
        Schema::create('devices', function (Blueprint $table) {
            $table->uuid('id')->primary()->unique();
            $table->char('kode_puskesmas', 3);
            $table->timestamps();

            $table->index('id', 'dev_id');
        });

        Schema::create('d_data', function(Blueprint $table) {
            $table->id();
            $table->foreignUuid('dev_id')->references('id')->on('device');
            $table->decimal('suhu', 3, 1)->default(0.0);
            $table->decimal('berat', 4, 1)->default(0.0);
            $table->decimal('tinggi', 4, 1)->default(0.0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('device');
    }
};
