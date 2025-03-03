<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Categorie;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategorieController extends Controller
{
    public function index()
    {
        $categories = Categorie::with('formations')->get();

        return Inertia::render(
            'Admin/CategorieAdmin',
            [
                'categories' => $categories,
            ]
        );
    }

    public function create(Request $request)
    {
        $categorie = new Categorie(
            [
                'nom' => $request->nom,
                'slug' => $request->slug,
            ]
        );
        $categorie->save();
        return to_route('admin.categorie.index');
    }

    public function showUpdate(Request $request)
    {

        $categorie =  Categorie::find($request->id);
        if (!$categorie) {
            return view('errors.404');
        }
        return Inertia::render(
            'AdminShowUpdate',
            [
                'categorie' => $categorie
            ]
        );
    }
    //update
    public function update(Request $request)
    {
        $categorie = Categorie::find($request->id);
        $categorie->update(
            [
                'nom' => $request->nom,
                'slug' => $request->slug,
            ]
        );
        return to_route('admin.categorie.index');
    }
    //delete
    public function delete(Request $request)
    {
        $categorie = Categorie::find($request->id);
        $categorie->delete();
        return to_route('admin.categorie.index');
    }
}
