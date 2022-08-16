import Header from "@/Layouts/Header";
import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import { Inertia } from "@inertiajs/inertia";
import "../../scss/MovieDetails/Details.scss";

export default function details() {
    const movies = usePage().props.movies;
    const cartClick = () => {
        Inertia.post(route("add.item"), {
            id: movies.id,
            title: movies.title,
            description: movies.description,
            creator: movies.creator,
            image: movies.image_url,
            category: movies.category,
            year: movies.year,
            quantity: movies.quantity,
            price: movies.price,
        });
    };

    return (
        <>
            <Header />
            <div className="movie-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 col-xs-12">
                            <div className="movie-img">
                                <img src={movies.image_url} alt="" />
                                <div className="movie-btn">
                                    <div
                                        onClick={cartClick}
                                        className=" btn btn-primary"
                                    >
                                        Add to cart
                                    </div>
                                    <h5>Quantity:</h5>
                                    <p>{movies.quantity}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-12 col-xs-12">
                            <div className="movie-single-ct">
                                <h1 className="bd-hd">
                                    {movies.title}
                                    <span>{movies.year}</span>
                                </h1>
                                <div className="movie-tabs">
                                    <div className="tab-content">
                                        <div className="row">
                                            <div className="col-md-8 col-sm-12 col-xs-12">
                                                <p>{movies.description}</p>
                                            </div>
                                            <div className="col-md-4 col-xs-12 col-sm-12">
                                                <div className="right-content">
                                                    <h6>Director:</h6>
                                                    <p>
                                                        <a href="#">
                                                            {movies.creator}
                                                        </a>
                                                    </p>
                                                </div>
                                                <div className="right-content">
                                                    <h6>Genres:</h6>
                                                    <p>
                                                        <a href="#">
                                                            {movies.category}
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
