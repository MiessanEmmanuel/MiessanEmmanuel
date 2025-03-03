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
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('formation_id')->constrained()->onDelete('cascade');
            $table->foreignId('users_inscrit_id')->constrained('users_inscrit')->onDelete('cascade');
            $table->string('token', 64);
            $table->enum('statut', ['en attente', 'payé', 'annulé'])->default('en attente');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
