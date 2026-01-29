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
        Schema::create('koper_sakti', function (Blueprint $table) {
            $table->id();
            $table->string('nama_pasien');
            $table->string('nik');
            $table->string('jenis_kelamin');
            $table->string('umur');
            $table->string('kecamatan');
            $table->string('kelurahan');
            $table->text('alamat');
            $table->dateTime('tanggal_pengukuran');
            $table->decimal('kolesterol', 8, 2)->default(0);
            $table->decimal('asam_urat', 8, 2)->default(0);
            $table->decimal('gula_darah', 8, 2)->default(0);
            $table->integer('tensi_sys')->default(0);
            $table->integer('tensi_dia')->default(0);
            $table->decimal('tinggi_badan', 8, 2)->default(0);
            $table->decimal('berat_badan', 8, 2)->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('koper_sakti');
    }
};
