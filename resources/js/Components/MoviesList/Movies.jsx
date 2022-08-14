import React from 'react';
import { usePage } from '@inertiajs/inertia-react';

import MoviesList from './MovieList';

function Movies() {
    const movies = usePage().props.movies;
    return (
        <div>
            <section className='min-h-screen'>
                <h1>Movies</h1>
                <div className="movies-container">
                    {
                        movies.map(movie => {
                            return (
                                <MoviesList key={movie.id} title={movie.title} img={movie.image_url} quantity={movie.quantity} />
                            )
                        })
                    }
                </div>
            </section>
        </div>
        
    )
}
export default Movies;