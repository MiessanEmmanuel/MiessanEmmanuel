<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Confirmation d'inscription</title>
</head>
<body>
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1>Confirmation d'inscription à {{ $formation->nom }}</h1>

        <div style="background-color: #f4f4f4; padding: 15px; border-radius: 5px;">
            <h2>Détails de l'événement</h2>

            @if($formation->image)
            <img src="{{ storage_path($path_image) }}" alt="{{ $formation->nom }}" style="max-width: 100%; height: auto;">
            @endif

            <p><strong>Événement :</strong> {{ $formation->nom }}</p>

            <p><strong>Description :</strong> {{ $formation->description_courte }}</p>

            <div style="margin-top: 15px;">
                <h3>Informations pratiques</h3>

                <p><strong>Date :</strong> {{ \Carbon\Carbon::parse($formation->date_debut)->format('d/m/Y') }}</p>

                <p><strong>Heure :</strong> {{ $formation->heure_debut }}</p>

                <p><strong>Durée :</strong> {{ $formation->duree_valeur }} {{ $formation->duree_unite }}</p>

                @if($formation->niveau)
                <p><strong>Niveau :</strong> {{ $formation->niveau }}</p>
                @endif

                @if($formation->prerequis)
                <p><strong>Prérequis :</strong> {{ $formation->prerequis }}</p>
                @endif
            </div>

            <div style="margin-top: 15px;">
                <h3>Informations d'inscription</h3>

                @if($formation->gratuit)
                <p><strong>Tarif :</strong> Gratuit</p>
                @else
                <p><strong>Tarif :</strong> {{ $formation->tarif }} €</p>
                @endif

                <p><strong>Nombre de places :</strong> {{ $formation->nombre_de_place }}</p>

               {{-- < p><strong>Date limite d'inscription :</strong>
                    {{ \Carbon\Carbon::parse($formation->date_limite_inscription)->format('d/m/Y') }}
                </p> --}}
            </div>

            @if($formation->lien_video)
            <div style="margin-top: 15px;">
                <h3>Lien de la session</h3>
                <p><a href="{{ $formation->lien_video }}">Lien de la vidéo/session</a></p>
            </div>
            @endif
        </div>

        <div style="margin-top: 20px; text-align: center;">
            <p>Si vous avez des questions, n'hésitez pas à nous contacter.</p>
            <p>Merci de votre inscription !</p>
        </div>
    </div>
</body>
</html>
