<x-mail::message>
<img src="cid:image.png" alt="Bannière Formation" style="width: 100%; height: auto; margin-bottom:18px;" >


# Bonjour {{ $user->prenom }} {{ $user->nom }},

Merci pour votre inscription à ma formation **{{ $formation->nom }}**.

## Détails de la formation :
- **Description :** {{ $formation->description_courte }}
- **Date :** {{ \Carbon\Carbon::parse($formation->date_debut)->format('d/m/Y') }}
- **Heure de début :** {{ $formation->heure_debut }}
- **Durée :** {{ $formation->duree_valeur }} {{ $formation->duree_unite }}
- **Niveau :** {{ $formation->niveau }}
- **Public cible :**
@foreach ( $formation->audience as $audience )
* {{ $audience }}
@endforeach

@if($formation->gratuit)
Cette formation est **gratuite**.
@else
Tarif : **{{ $formation->tarif }}**
@endif

@isset($formation->prerequis)
## Prérequis :
@foreach ( $formation->prerequis as $prerequis )
- {{ $prerequis }}
@endforeach
@endisset

@if($formation->lien_video)
## Lien Meet :
<x-mail::button :url="$formation->lien_video" color="primary">
Avoir acceès à la salle meet
</x-mail::button>
@endif

## Informations supplémentaires :
- **Date limite d'inscription :** {{ \Carbon\Carbon::parse($formation->date_limite_inscription)->format('d/m/Y') }}
- **Nombre de places disponibles :** {{ $formation->nombre_de_place }}

Si vous avez des questions, n'hésitez pas à me contacter.

Merci,<br>
{{ config('app.name') }}
</x-mail::message>
