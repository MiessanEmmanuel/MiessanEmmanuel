<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use App\Models\Contact;
use App\Models\Formation;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Storage;

class PagesController extends Controller
{
    public function showHome()
    {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }

    public function showAbout()
    {
        return Inertia::render('Apropos', []);
    }
    /*  public function showAbout()
    {
       return Inertia::render('restaurant-app', [

        ]);
    } */

    public function showServices()
    {
        return Inertia::render('Services');
    }
    public function showFormation()
    {
        $formations = Formation::where('inscription_ouverte', "=", true)->with('categorie')->get()->map(
            function ($formation) {
                if ($formation->categorie_id !== null) $formation->categorie_name = Categorie::find($formation->categorie_id)->nom;
                return $formation;
            }
        );
        $categories = Categorie::all();

        return Inertia::render(
            'FormationPage',
            [
                'formations' => $formations,
                'categories' => $categories,
            ]
        );
    }
    public function showFormationSingle($slug)
    {
        if (empty($slug)) $slug = request('slug');

        $formation = Formation::where('slug', $slug)->with('categorie')->first();


        $formation->image = Storage::url($formation->image);
        $formation->details = json_decode($formation->details);
        $formation->audience = json_decode($formation->audience);
        $formation->prerequis = json_decode($formation->prerequis);


        return Inertia::render('FormationSinglePage', [
            'formation' => $formation,
        ]);
    }

    public function termsOfUse()
    {
        return Inertia::render('TermsOfUse');
    }

    public function privacyPolicy()
    {
        return Inertia::render('PrivacyPolicyPage');
    }
    public function showContact()
    {
        return Inertia::render('Contact');
    }

    public function takeContact(Request  $request)
    {
        $validated = $request->validate([
            'first_name' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'country' => 'required',
            'message' => 'required',
        ]);
        $data = $request->all();
        Contact::create($data);




        return Inertia::render('Contact');
    }

    public function showWeb()
    {
        return Inertia::render('Services/CreationSiteWeb');
    }
    public function showAccompFacebookAds()
    {
        return Inertia::render('Services/AccompFacebookAds');
    }
    public function showDesign()
    {
        return Inertia::render('Services/DesignGraphic');
    }
    public function showPageVente()
    {
        return Inertia::render('Services/PageDeVente');
    }
    public function showDashboard(Request $request)
    {
        $user = $request->user();
        $listExercices = $user->exercices()->get();

        $listExercices->map(function ($item) {
            $item->path_overview = Storage::url($item->path_overview);
        });

        return Inertia::render('Dashboard', [
            'listExercices' => $listExercices
        ]);
    }
}
