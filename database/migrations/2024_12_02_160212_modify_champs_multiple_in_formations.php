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
        Schema::table('formations', function (Blueprint $table) {
            $table->text('prerequis')->nullable()->change();
            $table->text('audience')->nullable()->change();
            $table->text('details')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('formations', function (Blueprint $table) {
            $table->text('prerequis')->nullable()->change();
            $table->text('audience')->nullable()->change();
            $table->text('details')->nullable()->change();
        });
    }
};
