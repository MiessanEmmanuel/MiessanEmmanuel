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
        Schema::table('users_inscrit', function (Blueprint $table) {
            $table->string('payment_token', 64)->nullable();
            $table->enum('payment_statut', ['en attente', 'payé', 'annulé'])->default('en attente');
            $table->string('payment_montant')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users_inscrit', function (Blueprint $table) {
            $table->string('payment_token', 64)->nullable();
            $table->enum('payment_statut', ['en attente', 'payé', 'annulé'])->default('en attente');
            $table->string('payment_montant')->nullable();
        });
    }
};
