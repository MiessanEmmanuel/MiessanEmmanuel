<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Categorie;
use App\Models\Formation;
use App\Models\UserInscrit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class FormationController extends Controller
{


    public function index(Request $request)
    {
        $formations = Formation::with(['categorie', 'userInscrits'])->get()->map(
            function ($formation) {
                /* dd($formation->userInscrits->count()); */
                $formation->userInscrits = $formation->userInscrits->count();
                if ($formation->categorie_id !== null) $formation->categorie_name = Categorie::find($formation->categorie_id)->nom;
                return $formation;
            }
        );

        return Inertia::render(
            'Admin/FormationAdmin',
            [
                'formations' => $formations,

            ]
        );
    }

    /**
     * Afficher le formaulaire d'ajout de formation
     * @return \Inertia\Response
     *  */
    public function showForm(Request $request)
    {

        $categories = Categorie::all();
        return Inertia::render(
            'Admin/AddFormationAdmin',
            [
                'categories' => $categories,
            ]
        );
    }

    /**
     * Traitement de donnée pour l'envoie du formulaire d'AJOUT
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function create(Request $request)
    {


        $validated = $request->validate([
            'nom' => 'required|string|max:255',
            'slug' => 'required|string|max:255',
            'description_courte' => 'required|string|max:255',
            'description_longue' => 'string|nullable',
            'lien_video' => 'string|nullable',
            'image' => 'file|required',

            'date_debut' => 'required|date',
            'heure_debut' => 'string|nullable',
            'duree_unite' => 'required|string',
            'duree_valeur' => 'required|numeric',
            'prerequis' => 'string|nullable',
            'audience' => 'string|nullable',
            'details' => 'string|nullable',
            'niveau' => 'string|nullable',
            'inscription_ouverte' => 'required|boolean',
            'date_limite_inscription' => 'date|nullable',
            'nombre_de_place' => 'required|numeric',
            'gratuit' => 'required|boolean',
            'tarif' => 'numeric|nullable',
            'categorie_id' => 'integer|required',
        ]);

        /*  convertir les chaines en JSONARRAY */

        $jsonArrayAudience = array_map('trim', explode(',', $request->audience));
        $jsonArrayPrerequis = array_map('trim', explode(',', $request->prerequis));
        $jsonArrayDetails = array_map('trim', explode(',', $request->details));

        /* Convertir les JsonArray en JSON */
        $jsonAudience = json_encode($jsonArrayAudience);
        $jsonPrerequis = json_encode($jsonArrayPrerequis);
        $jsonDetails = json_encode($jsonArrayDetails);

        /* traitement et stokage de l'image  */
        $image = $request->file('image');
        $image_name = time() . '.' . $image->getClientOriginalExtension();
        $path_image = $image->storeAs(
            'public/formation',
            $image_name
        );


        /* enregistrement en BD de la formation  */

        $formation = new Formation();

        $formation->nom = $request->nom;
        $formation->slug = $request->slug;
        $formation->description_courte = $request->description_courte;
        $formation->description_longue = $request->description_longue;
        $formation->lien_video = $request->lien_video;
        $formation->image = $path_image;


        $formation->date_debut = $request->date_debut;
        $formation->heure_debut = $request->heure_debut;
        $formation->duree_unite = $request->duree_unite;
        $formation->duree_valeur = $request->duree_valeur;

        $formation->prerequis = $jsonPrerequis;
        $formation->audience = $jsonAudience;
        $formation->details = $jsonDetails;

        $formation->niveau = $request->niveau;
        $formation->inscription_ouverte = $request->inscription_ouverte;
        $formation->date_limite_inscription = $request->date_limite_inscription;
        $formation->nombre_de_place = $request->nombre_de_place;
        $formation->gratuit = $request->gratuit;
        $formation->tarif = $request->tarif;
        $formation->categorie_id = $request->categorie_id;


        $formation->save();



        /*  Formation::create($request->all()); */
        return to_route('admin.formation.index')->with('success', 'Formation créée avec succès.');
    }

    /**
     * Traitement de donnée pour l'envoie du formulaire de SUPPRESSION
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function delete(Request $request)
    {
        $formation = Formation::find($request->id);
        $formation->delete();
        return to_route('admin.formation.index');
    }
    // update
    public function showUpdate(Request $request)
    {
        $formation =  Formation::find($request->input('id'));
        if(!$formation){
            return view('errors.404');
        }
        /*
       faire le contraire de ça (déjà fait je crois )
       $jsonArrayAudience = array_map('trim', explode(',', $request->audience)); */
        $jsonArrayAudience =  implode(',', json_decode($formation->audience, true));
        $jsonArrayPrerequis =  implode(',', json_decode($formation->prerequis, true));
        $jsonArrayDetails =  implode(',', json_decode($formation->details, true));


        $formation->audience = $jsonArrayAudience;
        $formation->prerequis = $jsonArrayPrerequis;
        $formation->details = $jsonArrayDetails;

        $formation->image = Storage::url($formation->image);




        $categories = Categorie::all();
        return Inertia::render(
            'Admin/UpdateFormationAdmin',
            [
                'formation' => $formation,
                'categories' => $categories,
            ]
        );
    }

    /**
     * Traitement de donnée pour l'envoie du formulaire de MODIFICATION
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request)
    {

        $formation = Formation::find($request->id);

        $jsonArrayAudience = array_map('trim', explode(',', $request->audience));
        $jsonArrayPrerequis = array_map('trim', explode(',', $request->prerequis));
        $jsonArrayDetails = array_map('trim', explode(',', $request->details));

        /* Convertir les JsonArray en JSON */
        $jsonAudience = json_encode($jsonArrayAudience);
        $jsonPrerequis = json_encode($jsonArrayPrerequis);
        $jsonDetails = json_encode($jsonArrayDetails);
        /*  dd($request->input('imageDorigine')); */

        // image
        $path_image = $formation->image;
       /*  dd($request->imageDorigine); */
        if ($request->imageDorigine === "1") {
            Storage::delete($formation->image);
            $image = $request->file('image');
            $image_name = time() . '.' . $image->getClientOriginalExtension();
            $path_image = $image->storeAs(
                'public/formation',
                $image_name
            );
        }

        $formation->update(
            [
                'nom' => $request->nom,
                'slug' => $request->slug,
                'description_courte' => $request->description_courte,
                'description_longue' => $request->description_longue,
                'image' => $path_image,
                'lien_video' => $request->lien_video,
                'date_debut' => $request->date_debut,
                'heure_debut' => $request->heure_debut,
                'duree_unite' => $request->duree_unite,
                'duree_valeur' => $request->duree_valeur,
                'prerequis' => $jsonPrerequis,
                'audience' => $jsonAudience,
                'details' => $jsonDetails,
                'niveau' => $request->niveau,
                'inscription_ouverte' => $request->inscription_ouverte,
                'date_limite_inscription' => $request->date_limite_inscription,
                'nombre_de_place' => $request->nombre_de_place,
                'gratuit' => $request->gratuit,
                'tarif' => $request->tarif,
                'categorie_id' => $request->categorie_id,
            ]
        );
        return to_route('admin.formation.index');
    }


    public function showUserInscrits($formation_slug)
    {


        $formation = Formation::where('slug', $formation_slug)->first();
        if(!$formation){
            return view('errors.404');
        }
        $usersInscrits = $formation->userInscrits()->paginate(10);

        return Inertia::render(
            'Admin/ShowUserInscrit',
            [
                'formation' => $formation,
                'usersInscrits' => $usersInscrits,
            ]
        );
    }

    //delete
    public function deleteUserInscrits(Request $request)
    {

        $formation_id = $request->input('formation_id');
        $formation_slug = Formation::find($formation_id)->slug;
        $user_id = $request->input('id');
        $userInscrit = UserInscrit::where('formation_id', $formation_id)->where('id', $user_id)->first();

        $userInscrit->delete();

        return to_route('admin.formation.userInscrits', $formation_slug)->with('succces', 'L\'utilisateur a bien été supprimé de cette formation');
    }

    public function exportCsv(Request $request)
{
    $formation = Formation::findOrFail($request->formation_id);

    $usersInscrits = $formation->userInscrits()->get();

    $csvData = "Nom,Prénom,Email,Téléphone,Date d'inscription\n";

    foreach ($usersInscrits as $user) {
        $csvData .= "{$user->nom},{$user->prenom},{$user->email},{$user->telephone},{$user->created_at}\n";
    }

    $fileName = "inscrits_formation_{$formation->id}.csv";

    return Response::make($csvData, 200, [
        'Content-Type' => 'text/csv',
        'Content-Disposition' => "attachment; filename={$fileName}",
    ]);
}
}
