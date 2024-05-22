<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
    ]);
})->name('home');

Route::get('/cloud', [\App\Http\Controllers\VpsController::class, 'home'])->name('cloud');

Route::permanentRedirect('/vps', '/cloud');
Route::permanentRedirect('/vds', '/cloud');

Route::get('/dedicated', [\App\Http\Controllers\DedicatedController::class, 'home'])->name('dedicated');

Route::get('/website', function () {
    return Inertia::render('WebsiteHosting');
})->name('website');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});
