<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page non trouvée</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
            font-family: 'Arial', sans-serif;
            color: #333;
        }

        .error-container {
            text-align: center;
        }

        .error-container h1 {
            font-size: 10rem;
            margin: 0;
            color: #ff6b6b;
        }

        .error-container p {
            font-size: 1.5rem;
            margin: 20px 0;
        }

        .error-container a {
            text-decoration: none;
            color: white;
            background-color: #37854d;
            padding: 10px 20px;
            margin: 20px 0;

            border-radius: 5px;
            font-size: 1rem;
        }

        .error-container a:hover {
            background-color: #2a653a;
        }

        .error-image {
            max-width: 100%;
            width: 30%;
            height: auto;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="error-container">
        <img src="{{ asset('img/404.webp') }}" alt="Erreur 404" class="error-image">
        <h1>404</h1>
        <p>Oups, la page que vous recherchez est introuvable.</p>
        <a href="{{ url('/') }}">Retourner à l'accueil</a>
    </div>
</body>
</html>
