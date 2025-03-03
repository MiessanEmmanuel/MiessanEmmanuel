<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Formation extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom',
        'slug',
        'description_courte',
        'description_longue',
        'image',
        'lien_video',
        'date_debut',
        'heure_debut',
        'duree_unite',
        'duree_valeur',
        'prerequis',
        'audience',
        'details',
        'niveau',
        'inscription_ouverte',
        'date_limite_inscription',
        'nombre_de_place',
        'gratuit',
        'tarif',
        'categorie_id'
    ];

    protected $casts = [
        'prerequis' => 'array',
        'audience' => 'array',
        'details' => 'array',
    ];

    public function categorie()
    {
        return $this->belongsTo(Categorie::class);
    }

    public function userInscrits()
    {
        return $this->hasMany(UserInscrit::class);
    }



}
