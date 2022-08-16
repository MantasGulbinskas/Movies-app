<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Log;
use Redirect;
use with;

class MovieController extends Controller
{
    public function index()
    {
        $movies = Movie::all();
        return Inertia::render('Index', ['movies' => $movies]);
    }
    public function getMovieList()
    {
        try {
            $movies = Movie::all();
            return response()->json($movies);
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    public function addMovie(Request $request)
    {
        if ($request->isMethod('post')) {
            $request->validate(
                [
                'title' => 'required',
                'year' => 'required|integer|gt:0',
                'creator' => 'required',
                'category' => 'required',
                'quantity' => 'required|integer|gt:0',
                'image' => 'required',
                'description' => 'required',
                'price' => 'required|integer|gt:0',
                ]
            );
            $movies = new Movie();
            $data = array(
                'title' => $request->input('title'),
                'description' => $request->input('description'),
                'creator' => $request->input('creator'),
                'image_url' => $request->input('image'),
                'category' => $request->input('category'),
                'year' => $request->input('year'),
                'quantity' => $request->input('quantity'),
                'price' => $request->input('price'),
            );
            $movies->create($data);
            return redirect('/admin')->with('success', 'Successfully!  Movie added!');
        }
        return Inertia::render('AddMovie');
    }

    public function edit(int $id, Request $request, movie $movies)
    {
        $movies = Movie::find($id);
        if ($request->isMethod('post')) {
            $data = array(
                'title' => $request->input('title'),
                'description' => $request->input('description'),
                'creator' => $request->input('creator'),
                'image_url' => $request->input('image'),
                'category' => $request->input('category'),
                'year' => $request->input('year'),
                'quantity' => $request->input('quantity'),
                'price' => $request->input('price'),

            );

            $movieEdit = Movie::findOrFail($id);
            $movieEdit->update($data);

            return redirect('/admin')->with('success', 'Successfully!  Movie updated!');
        }
        return Inertia::render('Admin/Edit', ['movie' => $movies]);
    }

    public function show($id)
    {
        return Inertia::render(
            'details',
            [
            'movies' => Movie::findOrFail($id),
            ]
        );
    }

    public function destroy(Movie $movies, $id)
    {
        $movies = Movie::findOrFail($id);
        $movies->delete();
        return redirect('/admin')->with('success', 'Successfully!  Movie deleted!');
    }
}
