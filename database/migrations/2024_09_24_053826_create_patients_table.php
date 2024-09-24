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
        Schema::create('patients_new', function (Blueprint $table) {
            $table->id();
            $table->char('nik', 16)->unique();
            $table->string('nama_pasien');
            $table->char('jenis_kelamin', 1);
            $table->date('tgl_lahir');
            $table->string('kecamatan');
            $table->string('kelurahan');
            $table->string('kabkota');
            $table->string('alamat');
            $table->decimal('no_hp', 13, 0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('patients_new');
    }
};
