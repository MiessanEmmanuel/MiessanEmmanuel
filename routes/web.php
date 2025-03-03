<?php

use App\Http\Controllers\Admin\ExerciceController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\PagesController;

use App\Http\Controllers\ProfileController;

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\InscriptionController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\CategorieController;
use App\Http\Controllers\Admin\FormationController;







Route::get('/', [PagesController::class, 'showHome'])->name('accueil');
Route::get('/a-propos', [PagesController::class, 'showAbout'])->name('apropos');
Route::get('/contact', [PagesController::class, 'showContact'])->name('contact');
Route::get('/formation', [PagesController::class, 'showFormation'])->name('formation');
Route::get('/formation/{slug}', [PagesController::class, 'showFormationSingle'])->name('formation.single');

Route::post('/formation/inscription', [InscriptionController::class, 'formationGratuite'])->name('formation.inscription');
Route::post('/formation/paiement', [InscriptionController::class, 'formationPayante'])->name('formation.paiement');
Route::post('/formation/paiement-sendToken', [InscriptionController::class, 'sendToken'])->name('formation.paiement.sendToken');

Route::get('/formation-thankyou/{email}-{formation_slug}', [InscriptionController::class, 'formationThankYou'])->name('formation.thankyou');
Route::get('/formation-thankyouMoneyFusion', [InscriptionController::class, 'callbackMoneyFusion'])->name('formation.callbackMoneyFusion');




Route::post('/take-contact', [PagesController::class, 'takeContact'])->name('takeContact');
Route::get('/services', [PagesController::class, 'showServices'])->name('services');
Route::get('/page-de-vente', [PagesController::class, 'showPageVente'])->name('pagedevente');
Route::get('/web-creation', [PagesController::class, 'showWeb'])->name('webcreation');
Route::get('/design-creation', [PagesController::class, 'showDesign'])->name('designcreation');
Route::get('/accomp-facebookads', [PagesController::class, 'showAccompFacebookAds'])->name('accompfacebookads');

Route::get('/contactez-nous', [PagesController::class, 'showTakeContact'])->name('prendrecontact');

Route::get('/termsofuse', [PagesController::class, 'termsOfUse'])->name('termsofuse');
Route::get('/privacypolicy', [PagesController::class, 'privacyPolicy'])->name('privacypolicy');

/* Exercices For user */
Route::middleware('auth')->prefix('/exercices')->group(function () {
    Route::get('', [ExerciceController::class, 'indexForUser'])->name('exercices.indexForUser');
   /*  Route::get('/{exercice}', [ExerciceController::class, 'singleForUser'])->name('exercices.singleForUser'); */
   Route::put('/{exercice}', [ExerciceController::class, 'changeStatutCoding'])->name('exercices.changeStatutCoding');
    Route::post('/{exercice}', [ExerciceController::class, 'inscriptionExercice'])->name('exercices.inscription');
    Route::post('/{exercice}/quitter', [ExerciceController::class, 'quitterExercice'])->name('exercices.quitterExercice');
});




Route::get('/termsofuse', [PagesController::class, 'termsOfUse'])->name('termsofuse');

Route::get('/dashboard', [PagesController::class, 'showDashboard'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'role:admin'])->prefix('/geeklefilsduDieutreshaut/admin')->group(function () {
    Route::get('/', [AdminController::class, 'index'])->name('admin.dashboard');

    /* Formations  */
    Route::prefix('/formations')->group(function () {
        Route::get('/', [FormationController::class, 'index'])->name('admin.formation.index');
        Route::get('/add', [FormationController::class, 'showForm'])->name('admin.addformation.show');
        Route::post('/create', [FormationController::class, 'create'])->name('admin.formation.create');
        Route::get('/update', [FormationController::class, 'showUpdate'])->name('admin.formation.update.show');
        Route::post('/update', [FormationController::class, 'update'])->name('admin.formation.update');
        Route::post('/delete', [FormationController::class, 'delete'])->name('admin.formation.delete');

        Route::get('/{formation_slug}$users-inscrits', [FormationController::class, 'showUserInscrits'])->name('admin.formation.userInscrits');
        Route::post('/delete-users-inscrits', [FormationController::class, 'deleteUserInscrits'])->name('admin.formation.userInscrits.delete');
    });

    Route::get('/formation/export-csv', [FormationController::class, 'exportCsv'])->name('admin.formation.exportCsv');

    /* categories formations */
    Route::get('/categories', [CategorieController::class, 'index'])->name('admin.categorie.index');
    Route::post('/categories/create', [CategorieController::class, 'create'])->name('admin.categorie.create');
    Route::post('/categories/update', [CategorieController::class, 'update'])->name('admin.categorie.update');
    Route::post('/categories/delete', [CategorieController::class, 'delete'])->name('admin.categorie.delete');

    Route::resource('/exercices', ExerciceController::class);




});


Route::middleware(['auth', 'role:superadmin'])->prefix('/geeklefilsduDieutreshaut/admin')->group(function () {

    Route::get('/contacts', [ContactController::class, 'show'])->name('admin.contacts.show');
    Route::post('/contacts/delete', [ContactController::class, 'delete'])->name('admin.contacts.delete');
    Route::post('/contacts/setLu', [ContactController::class, 'setLuContact'])->name('admin.contacts.setLuContact');

});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
