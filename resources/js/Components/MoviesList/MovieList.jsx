import React from "react";
import "../../../scss/MovieList/MovieList.scss";
import { Link } from "@inertiajs/inertia-react";

export default function MoviesList(props) {
    return (
        <div className="movie-item">
            <Link href={"/details/" + props.id}>
                <div className="movie-img ">
                    <img src={props.image_url} alt="image" />
                </div>
            </Link>
        </div>
    );
}
