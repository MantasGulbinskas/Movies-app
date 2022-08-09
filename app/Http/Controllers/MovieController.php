<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;
use Redirect;
use Inertia\Inertia;
use Log;
use Exception;

class MovieController extends Controller
{
    public function index() {
        $movies = Movie::all();
        return Inertia::render('Index', ['movies' => $movies]);
    }
    public function getMovieList() {
        try {
            $movies = Movie::all();
            return response()->json($movies);
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    public function addMovie(Request $request) {
        if ($request->isMethod('post')){
            $request->validate([
                'title' => 'required',
                'year' =>  'required|integer|gt:0',
                'creator' => 'required',
                'category' => 'required',
                'quantity' => 'required|integer|gt:0',
                'image' => 'required',
                'description' => 'required',
            ]);
            $movies = new Movie();
            $data = array(
                'title' => $request->input('title'),
                'year' => $request->input('year'),
                'creator' => $request->input('creator'),
                'category' => $request->input('category'),
                'quantity' => $request->input('quantity'),
                'image_url' => $request->input('image'),
                'description' => $request->input('description'),

            );
            $movies->create($data);
            return redirect('/admin')->with('success', 'Movie added!');
        }
        return Inertia::render('AddMovie');
    }

}
