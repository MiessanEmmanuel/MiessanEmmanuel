<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exercice extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'path_overview',
        'deadline',
        'etat',
    ];


    /**
     * Get all of the comments for the Exercice
     *
     * @return \Illuminate\Database\Eloquent\Relations\belongsToMany
     */
    public function users()
    {
        return $this->belongsToMany(User::class, 'exercice_user')->withPivot('statut');
    }


    /**
     *
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function technos()
    {
        return $this->belongsToMany(Techno::class, 'exercice_techno');
    }
}
