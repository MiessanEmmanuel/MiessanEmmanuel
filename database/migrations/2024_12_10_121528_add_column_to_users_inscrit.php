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
            $table->string('payment_moyen')->nullable();
            $table->string('payment_numero')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users_inscrit', function (Blueprint $table) {

        });
    }
};
