import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import { Autoplay, Pagination, Navigation } from "swiper";
import MoviesList from "./MovieList";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../../scss/MovieList/MovieList.scss";

function Movies() {
    const movies = usePage().props.movies;
    return (
        <div className="movie-items">
            <div className="container">
                <div className="row">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={20}
                        slidesPerGroup={5}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: true,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                    >
                        {movies.map((movie) => {
                            return (
                                <SwiperSlide key={movie.id}>
                                    <MoviesList
                                        id={movie.id}
                                        title={movie.title}
                                        image_url={movie.image_url}
                                        quantity={movie.quantity}
                                        category={movie.category}
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
export default Movies;
