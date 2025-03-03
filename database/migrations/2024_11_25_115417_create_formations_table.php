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
        Schema::create('formations', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('slug')->unique();
            $table->string('description_courte');
            $table->text('description_longue')->nullable();
            $table->string('image')->nullable();
            $table->string('lien_video')->nullable();

            $table->date('date_debut');
            $table->time('heure_debut')->nullable();
            $table->date('date_limite_inscription')->nullable();
            $table->enum('duree_unite',['minutes', 'heures', 'mois'])->default('mois');
            $table->integer('duree_valeur')->default(0);

            $table->json('prerequis')->nullable();
            $table->json('audience')->nullable();
            $table->json('details')->nullable();

            $table->boolean('inscription_ouverte')->default(false);
            $table->integer('nombre_de_place')->default(0);

            $table->enum('niveau', ['débutant', 'intermédiaire', 'avancé'])->nullable();

            $table->boolean('gratuit');
            $table->decimal('tarif', 10, 2)->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('formations');
    }
};
