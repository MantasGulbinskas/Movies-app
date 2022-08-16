<?php

use App\Http\Controllers\BasketController;
use App\Http\Controllers\MovieController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', [MovieController::class, 'index']);

Route::get(
    '/admin',
    function () {
        return Inertia::render('Admin/AdminLayout');
    }
);
Route::get(
    '/get/movie/list',
    [MovieController::class, 'getMovieList']
);

Route::get(
    '/admin/create',
    function () {
        return Inertia::render('Admin/Create');
    }
);

Route::post('/admin/add', [MovieController::class, 'addMovie']);

Route::get(
    '/admin/create',
    function () {
        return Inertia::render('Admin/Create');
    }
);

Route::get('/details/{id}', [MovieController::class, 'show']);

Route::post('/admin/edit/{id}', [MovieController::class, 'edit']);
Route::get('/admin/edit/{id}', [MovieController::class, 'edit']);

Route::get('/admin/delete/{id}', [MovieController::class, 'destroy']);

Route::get(
    '{path?}',
    function () {
        return Inertia::render('errors/404');
    }
);
