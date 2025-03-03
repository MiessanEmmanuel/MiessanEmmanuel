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
        Schema::create('exercice_techno', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_exercice')->constrained('exercices')->onDelete('cascade');
            $table->foreignId('id_techno')->constrained('techno')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('exercice_techno');
    }
};
