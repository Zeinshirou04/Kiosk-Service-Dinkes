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
        Schema::create('tension', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid("dev_id")->references("id")->on("devices");
            $table->decimal("b_atas", 5, 2);
            $table->decimal("b_bawah", 5, 2);
            $table->decimal("denyut", 5, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tension');
    }
};
