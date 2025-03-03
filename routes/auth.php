<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::get('register_oudbeidbkhsdskbskbfhbhbshksbiebhiepns04494', [RegisteredUserController::class, 'create'])
                ->name('register');

    Route::post('register_oudbeidbkhsdskbskbfhbhbshksbiebhiepns04494', [RegisteredUserController::class, 'store']);

    Route::get('login_jdkdjjdhsddhjsd098333939303_djdkdhk', [AuthenticatedSessionController::class, 'create'])
                ->name('login');

    Route::post('login_jdkdjjdhsddhjsd098333939303_djdkdhk', [AuthenticatedSessionController::class, 'store']);

    Route::get('forgot-password_993330DSJDSDSNdhdsjdhsibd39djds', [PasswordResetLinkController::class, 'create'])
                ->name('password.request');

    Route::post('forgot-password_993330DSJDSDSNdhdsjdhsibd39djds', [PasswordResetLinkController::class, 'store'])
                ->name('password.email');

    Route::get('reset-password_dhdsjbsbzueuueuuzzi393/{token}', [NewPasswordController::class, 'create'])
                ->name('password.reset');

    Route::post('reset-password_dhdsjbsbzueuueuuzzi393', [NewPasswordController::class, 'store'])
                ->name('password.store');
});

Route::middleware('auth')->group(function () {
    Route::get('verify-email', EmailVerificationPromptController::class)
                ->name('verification.notice');

    Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
                ->middleware(['signed', 'throttle:6,1'])
                ->name('verification.verify');

    Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
                ->middleware('throttle:6,1')
                ->name('verification.send');

    Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
                ->name('password.confirm');

    Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

    Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
                ->name('logout');
});
