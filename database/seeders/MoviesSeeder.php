<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MoviesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('movies')->insert([
            'id' => 1,
            'title' => 'Bullet Train',
            'description' => 'Five assassins aboard a fast moving bullet train find out their missions have something in common',
            'creator' => 'David Leitch',
            'image_url' => 'https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
            'category' => 'Action',
            'year' => 2022,
            'quantity' => 15,
            'price' => 12,
            'created_at' => date("Y-m-d H:i:s"),
        ]);

        DB::table('movies')->insert([
            'id' => 2,
            'title' => 'Nope',
            'description' => 'The residents of a lonely gulch in inland California bear witness to an uncanny and chilling discovery',
            'creator' => 'Jordan Peele',
            'image_url' => 'https://hollywoodlife.com/wp-content/uploads/2022/06/Nope-Everything-To-Know-embed-1.jpg',
            'category' => 'Mystery',
            'year' => 2022,
            'quantity' => 12,
            'price' => 22,
            'created_at' => date("Y-m-d H:i:s"),
        ]);

        DB::table('movies')->insert([
            'id' => 3,
            'title' => 'The Black Phone',
            'description' => 'After being abducted by a child killer and locked in a soundproof basement, a 13-year-old boy starts receiving calls on a disconnected phone from the killers previous victims',
            'creator' => 'Scott Derrickson',
            'image_url' => 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/The_Black_Phone.jpg/220px-The_Black_Phone.jpg',
            'category' => 'Horror',
            'year' => 2021,
            'quantity' => 9,
            'price' => 6,
            'created_at' => date("Y-m-d H:i:s"),
        ]);

        DB::table('movies')->insert([
            'id' => 4,
            'title' => 'Prey',
            'description' => 'The origin story of the Predator in the world of the Comanche Nation 300 years ago. Naru, a skilled warrior, fights to protect her tribe against one of the first highly-evolved Predators to land on Earth.',
            'creator' => 'Dan Trachtenber',
            'image_url' => 'https://m.media-amazon.com/images/M/MV5BMDBlMDYxMDktOTUxMS00MjcxLWE2YjQtNjNhMjNmN2Y3ZDA1XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_FMjpg_UX1000_.jpg',
            'category' => 'Action',
            'year' => 2022,
            'quantity' => 11,
            'price' => 7,
            'created_at' => date("Y-m-d H:i:s"),
        ]);

        DB::table('movies')->insert([
            'id' => 5,
            'title' => 'The Sandman',
            'description' => 'Upon escaping after decades of imprisonment by a mortal wizard, Dream, the personification of dreams, sets about to reclaim his lost equipment.',
            'creator' => 'Neil Gaiman',
            'image_url' => 'https://m.media-amazon.com/images/M/MV5BNGY0NDIxZDYtMWMzZS00OGQ3LTgwOGEtMWQ5ZmQxM2EwY2NjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
            'category' => 'Drama',
            'year' => 2022,
            'quantity' => 17,
            'price' => 1,
            'created_at' => date("Y-m-d H:i:s"),
        ]);
    }
}
