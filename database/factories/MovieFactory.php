<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class MovieFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    public function definition()
    {
   
        return [
            'title' => $this->faker->title,
            'description' => $this->faker->text,
            'creator'=> $this->faker->name,
            'image_url'=> $this->faker->imageUrl($width = 640, $height = 480, 'cats'),
            'category'=> $this->faker->text,
            'year' => $this->faker->year($max = 'now')
        ];
    }
}
