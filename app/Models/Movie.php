<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;


    protected $fillable = [
        'title',
        'description',
        'creator',
        'category',
        'quantity',
        'image_url',
        'year',
    ];

}