<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserInscrit extends Model
{
    use HasFactory;

    protected $table = 'users_inscrit';

    protected $fillable= [
        'id',
        'nom',
        'prenom',
        'email',
        'telephone',
        'formation_id'
    ];

    public function formation()
    {
        return $this->belongsTo(Formation::class);
    }



}
