<?php

namespace App\Services\Basket;

use App\DTO\Basket;
use App\DTO\BasketItem;
use App\Models\Movie;

class BasketManager
{
    private BasketSessionStorage $basketSessionStorage;

    public function __construct(BasketSessionStorage $basketSessionStorage)
    {
        $this->basketSessionStorage = $basketSessionStorage;
    }

    public function addItem(Movie $movie,): void
    {
        $basket = $this->getBasket();

        if ($basket->hasItem($movie->id)) {
            $basketItem = $basket->getItem($movie->id);
            // $basketItem->setQuantity($basketItem->getQuantity() + $quantity);
        } else {
            $basketItem = new BasketItem(
                $movie->id,
                $movie->title,
                $movie->price,
                $movie->quantity
            );

            $basket->addItem($basketItem);
        }


        //Jeigu būčiau sylius saugočiau į DB
        $this->basketSessionStorage->store($basket);
        //        Session::put('basket', $basket);
    }



    public function getBasket(): Basket
    {
        //Jeigu būčiau sylius traukčiau iš DB
        $basket = $this->basketSessionStorage->get();
        //        Session::get('basket');

        return $basket ?: new Basket();
    }
}
