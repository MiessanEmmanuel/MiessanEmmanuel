<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreExerciceRequest;
use App\Http\Requests\UpdateExerciceRequest;
use App\Models\Exercice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ExerciceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $listInscritsAExercice = [];
        $exercices = Exercice::all();
        $exercices->map(function ($exercice) {
            $exercice->path_overview = Storage::url($exercice->path_overview);
            $exercice->users_count =  $exercice->users()->count('*');
        });


        return Inertia::render('Admin/Exercice/Exercices', [
            'exercices' =>  $exercices,
            'listInscritsAExercice' => $listInscritsAExercice
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //protegeger avec une middleware de super admin
        return Inertia::render('Admin/Exercice/CreateExercice');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreExerciceRequest $request)
    {
        $pathOverview = Storage::disk('public')->putFile('exercices', $request->file('file'));

        Exercice::create([
            'title' => $request->title,
            'description' => $request->description,
            'path_overview' =>  $pathOverview,
            'deadline' => $request->deadline,
            'etat' => $request->etat
        ]);

        return  redirect('/geeklefilsduDieutreshaut/admin/exercices')->with('success', 'L\'exercice a été bien sauvegardé');
    }

    /**
     * Display the specified resource.
     */
    public function show(Exercice $exercice)
    {
        $exercice = Exercice::findOrFail($exercice->id);

        return Inertia::render('Admin/Exercice/SingleExercice', [
            'exercice' => $exercice
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Exercice $exercice)
    {
        $exercice = Exercice::findOrFail($exercice->id);
        $exercice->path_overview = Storage::url($exercice->path_overview);
        return Inertia::render('Admin/Exercice/EditExercice', [
            'exercice' => $exercice
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateExerciceRequest $request, Exercice $exercice)
    {
        $exercice = Exercice::findOrFail($exercice->id);

        $pathImage = $exercice->path_overview;
        if ($request->file('file') !== null) {
            Storage::disk('public')->delete($exercice->path_overview);
            $pathImage = Storage::disk('public')->putFile('formations', $request->file('file'));
        }


        $exercice->update([
            'title' => $request->title,
            'description' => $request->description,
            'path_overview' =>  $pathImage,
            'deadline' => $request->deadline,
            'etat' => $request->etat
        ]);

        return  redirect('/geeklefilsduDieutreshaut/admin/exercices')->with('success', 'L\'exercice a été bien modifié');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Exercice $exercice)
    {
        $exercice = Exercice::findOrFail($exercice->id);
        Storage::disk('public')->delete($exercice->path_overview);
        $exercice->delete();
        return  redirect('/geeklefilsduDieutreshaut/admin/exercices')->with('success', 'L\'exercice a été bien supprimé');
    }


    public function indexForUser(Request $request)
    {
        $exercices = Exercice::with(['users'])->where('etat', '!=', 'archivé')->get();

        $exercices->map(function ($exercice) {
            $exercice->path_overview = Storage::url($exercice->path_overview);
        });
        $listExerciceInscrit = $request->user()->exercices()->get();
        $newListExerciceInscrit = $listExerciceInscrit->map(function ($item) {
            return $item->pivot->exercice_id;
        });
        /*  return $exercices; */
        return Inertia::render('FolderExerciceForUser/ExercicesForUser', [
            'exercices' =>  $exercices,
            'listExerciceInscrit' => $newListExerciceInscrit
        ]);
    }

    public function singleForUser(Request $request)
    {
        $exercice = Exercice::findOrFail($request->exercice);
        $exercice->path_overview = Storage::url($exercice->path_overview);

        $listInscritsAExercice = $exercice->users()->get();
        $listExercicesInscrit = $request->user()->exercices()->get();
        $newListExercicesInscrit = $listExercicesInscrit->map(function ($item) {
            return $item->pivot->exercice_id;
        });


        return Inertia::render('FolderExerciceForUser/SingleForUser', [
            'exercice' =>  $exercice,
            'listInscritsAExercice' => $listInscritsAExercice,
            'listExercicesInscrit' => $newListExercicesInscrit
        ]);
    }

    public function inscriptionExercice(Request $request)
    {

        $user = $request->user();
        if (!isset($user)) {
            return to_route('login');
        }
        $exercice = Exercice::findOrFail($request->exercice);
        $estInscrit = $user->exercices()->where('exercice_id', $exercice->id)->exists();
        if ($estInscrit) {
            return to_route('exercices.indexForUser')->with('error', 'Vous êtes déjà inscrit à ' . $exercice->title);
        }
        $user->exercices()->attach($exercice->id);

        return redirect()->back()->with('success', 'Vous participez desormais à ' . $exercice->title)->with('preserveScroll', true);
    }

    public function quitterExercice(Request $request)
    {
        $user = $request->user();
        if (!isset($user)) {
            return to_route('login');
        }
        $exercice = Exercice::findOrFail($request->exercice);
        $user->exercices()->detach($exercice->id);

        return redirect()->back()->with('success', 'Vous ne participez plus à l\'exercice : ' . $exercice->title)->with('preserveScroll', true);
    }
    public function changeStatutCoding(Request $request)
    {
        $exercice = Exercice::with('users')->findOrFail($request->exercice);
        $exercice->users()->updateExistingPivot(Auth::id(), ['statut' => 'terminé']);

        return redirect()->back()->with('success', 'Félicitatons vous avez terminé l\'exercice : ' . $exercice->title);
    }
}
