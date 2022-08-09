<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


use App\Http\Controllers\MovieController;
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



Route::post('/admin/add', [MovieController::class, 'addMovie']);
Route::get('/admin', function() {
    return Inertia::render('Admin/AdminLayout');
});

Route::get('/admin/create', function() {
    return Inertia::render('Admin/Create');
});

Route::get('/get/movie/list',
 [MovieController::class, 'getMovieList']);
