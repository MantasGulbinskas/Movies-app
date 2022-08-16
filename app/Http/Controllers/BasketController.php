<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Movie;
use App\Models\Auction;
use App\Services\Basket\BasketManager;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use App\Http\Resources\AuctionResource;

class BasketController extends Controller
{
    private BasketManager $basketManager;

    public function __construct(BasketManager $basketManager)
    {
        $this->basketManager = $basketManager;
    }


    public function addItem(Request $request): string
    {
        $this->basketManager->addItem(Movie::find(1));
        //    $this->basketManager->removeItem(1);
        //    $this->basketManager->changeQuantity(2, 1);

                var_dump($this->basketManager->getBasket());
        //    var_dump($this->basketManager->getBasket());


        return 'testingBasket';
    }

    public function getBasket()
    {
        // return Inertia::render('Cart/CartList', ['basket' => $this->basketManager->getBasket()]);

        return ['basket' => $this->basketManager->getBasket()];
    }
}
