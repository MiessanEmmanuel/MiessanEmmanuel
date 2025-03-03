<?php

namespace App\Http\Controllers;

use App\Mail\InscriptionConfirme;
use App\Mail\InscriptionGratuitConfirme;
use App\Mail\InscriptionPaymentConfirme;
use App\Models\Formation;
use App\Models\Payment;
use App\Models\UserInscrit;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class InscriptionController extends Controller
{

    public function enregistrementUser($request)
    {

        $formation = Formation::find($request->input('formation_id'));
        if (!$formation) {
            // Gérez le cas où la formation n'existe pas
            return back()->with('error', 'Formation introuvable');
        }
        //verification du nombre de place disponible
        if ($formation->nombre_de_place <= 0) {
            return "0place";
        }

        $slug = $formation->slug;

        $email = $request->input('email');
        $verification_users = UserInscrit::where('formation_id', $request->input('formation_id'))->get();

        foreach ($verification_users as $key => $value) {
            if ($value->email === $email) {
                return [false, $slug];
            }
        }


        $users = new UserInscrit;

        $users->nom = $request->input('nom');
        $users->prenom = $request->input('prenom');
        $users->email = $request->input('email');
        $users->telephone =  $request->input('indicatif') . $request->input('telephone');
        $users->formation_id = $request->input('formation_id');

        $users->save();


        return $slug;
    }
    public function formationGratuite(Request $request)
    {
        $slug = InscriptionController::enregistrementUser($request);
        if ($slug === "0place") {
            return back()->with('error', 'Formation pleine');
        }
        if ($slug[0] === false) {
            /* dd($slug[1]); */
            return to_route('formation.single', $slug[1])->with('success', 'Vous êtes déjà inscrit à cette formation');
        }

        //enlever une place à chaque inscription
        $formation = Formation::where('slug', $slug)->first();

        $formation->nombre_de_place -= 1;
        $formation->save();

        // gerer l'inscription pour la page de confirmation avec le request
        return to_route('formation.thankyou', [
            'email' =>  $request->email,
            'formation_slug' => $slug,
        ])->with('success', 'Votre inscription a été validé');
    }


    public function formationPayante(Request $request)
    {

        // Infos sur la FORMATION EN QUESTION
        $formation = Formation::find($request->input('formation_id'));
        $slug = $formation->slug;
        session()->put('formationSlug', $slug);


        // Gérez le cas où la formation n'existe pas
        if (!$formation) {
            return back()->with('error', 'Formation introuvable');
        }
        //verification du nombre de place disponible
        if ($formation->nombre_de_place <= 0) {
            return back()->with('error', 'Formation pleine');
        }

        // VOIR SI L'UTILISATEUR N'EST PAS DEJA INSCRIT

        $email = $request->input('email');
        // sauvegarder l'email en variable de session
        session()->put('emailUserInscrit', $email);


        $verification_users = UserInscrit::where('formation_id', $request->input('formation_id'))->get();
        foreach ($verification_users as $key => $value) {
            if ($value->email === $email) {

                // VERIFICATION DU STATUT DE SON PAYMENT
                if ($value->payment_statut == "payé") {
                    // le cas où l'utilisateur a déjà payé
                    //.... forcé l'url à partir ailleurs
                    return to_route('formation.single', $slug)->with('success', 'ALERT : Vous êtes déjà inscrit à cette formation mais c\'est comme vous voulez🎁');
                } else {

                    return to_route('formation.single', $slug)->with('success', 'Vous devez maintenant terminer votre paiement');
                }
            }
        }

        /*  $user = UserInscrit::where('email', $request->input('email'))
            ->where('formation_id', $formation->id)->first(); */

        $users = new UserInscrit;

        $users->nom = $request->input('nom');
        $users->prenom = $request->input('prenom');
        $users->email = $request->input(key: 'email');
        $users->telephone =  $request->input('indicatif') . $request->input('telephone');
        $users->formation_id = $request->input('formation_id');
        $users->payment_token = $request->input('token');
        // mettre le statut de paiement en attente (automatique)
        $users->save();

        return to_route('formation.single', $slug)->with('success', 'Informations validées, Nous passons au paiement');
    }

    public function callbackMoneyFusion()
    {
        // recupérer les variable de session emailUserInscrit et formationSlug
        $email = session('emailUserInscrit');
        $formation_slug = session('formationSlug');
        if ($email == null || $formation_slug == null) return view('errors.404')->with('error', 'Jetez un oeil à l\'appareil sur lequel vous vous êtes inscrit');

        $formation = Formation::where('slug', $formation_slug)->first();
        $user = UserInscrit::where('email', $email)
            ->where('formation_id', $formation->id)->first();


        // pour les personne essayant d'arriver illegalement à cette page

        if (!$formation) {
            // Gérez le cas où la formation n'existe pas
            return back()->with('error', 'Formation introuvable');
        }


        if (!$user) {
            // Gérez le cas où l'utilisateur n'est pas inscrit
            return response()->view('errors.404', [], 404);
        }
        // Gérez le cas où l'utilisateur est déjà inscrit
        if ($user->mailSend) {
            return response()->view('errors.404', [], 404);
        }

        $token = $user->payment_token;
        $response = Http::get('https://www.pay.moneyfusion.net/paiementNotif/' . $token);
        /*    dd($response->json('data')); */


        if ($response->json('data.statut') == "paid") {
            $payment_montant = $response->json('data.Montant') + $response->json('data.frais');
            $user->payment_statut = "payé";
            $user->payment_montant = $payment_montant;
            $user->payment_moyen = $response->json('data.moyen');
            $user->payment_numero = $response->json('data.numeroTransaction');
            $user->save();

            if ($payment_montant < $formation->tarif) {
                $user->payment_statut = "tronqué";
                $user->save();
                return "vue qui va expliquer qu'il a tronquer le prix et qu'il doit nous contacter";
            }
        } else {
            return response()->view('errors.404', [], 404);
        }


        Mail::to($email)->send(new InscriptionPaymentConfirme($user, $formation));

        $user->mailSend = true;
        $user->save();

        $formation->image = Storage::url($formation->image);
        return Inertia::render('ConfirmationInscriptionPagePayant', [
            'user' => $user,
            'formation' => $formation,
        ]);
    }

    public function formationThankYou($email, $formation_slug)
    {
        /*  const checkPaymentStatus = async (token) => {
            try {
              const response = await axios.get(
                `https://www.pay.moneyfusion.net/paiementNotif/${token}`
              );
              return response.data;
            } catch (error) {
              throw error;
            }
          }; */
        $formation = Formation::where('slug', $formation_slug)->first();
        $user = UserInscrit::where('email', $email)
            ->where('formation_id', $formation->id)->first();

        if (!$formation->gratuit) {
            $token = $user->payment_token;
            $reponse = Http::get('https://www.pay.moneyfusion.net/paiementNotif/' . $token);
            dd($reponse);
        }

        // pour les personne essayant d'arriver illegalement à cette page

        if (!$formation) {
            // Gérez le cas où la formation n'existe pas
            return back()->with('error', 'Formation introuvable');
        }


        if (!$user) {
            // Gérez le cas où l'utilisateur n'est pas inscrit
            return response()->view('errors.404', [], 404);
        }

        // Gérez le cas où l'utilisateur est déjà inscrit
        if ($user->mailSend) {
            return response()->view('errors.404', [], 404);
        }

        Mail::to($email)->send(new InscriptionGratuitConfirme($user, $formation));

        $user->mailSend = true;
        $user->save();

        $formation->image = Storage::url($formation->image);
        return Inertia::render('ConfirmationInscriptionPage', [
            'user' => $user,
            'formation' => $formation,
        ]);
    }
}
