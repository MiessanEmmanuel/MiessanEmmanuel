<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Techno extends Model
{
    use HasFactory;

    protected $table= 'techno';


    /**
     * The roles that belong to the Techno
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function exercices()
    {
        return $this->belongsToMany(Exercice::class, 'exercice_techno');
    }
}
