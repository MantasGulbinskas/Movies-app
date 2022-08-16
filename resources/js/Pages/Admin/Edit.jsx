import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import "../../../scss/Admin/Edit.scss";

const Edit = (props) => {
    console.log(props);
    const movie = usePage().props.movie;
    const [title, setTitle] = useState(movie.title);
    const [year, setYear] = useState(movie.year);
    const [creator, setCreator] = useState(movie.creator);
    const [category, setCategory] = useState(movie.category);
    const [quantity, setQuantity] = useState(movie.quantity);
    const [price, setPrice] = useState(movie.price);
    const [image, setImage] = useState(movie.image_url);
    const [description, setDescription] = useState(movie.description);
    const saveData = (e) => {
        e.preventDefault();
        Inertia.post("/admin/edit/" + movie.id, {
            title,
            year,
            creator,
            category,
            quantity,
            image,
            description,
            price,
        });
    };

    return (
        <div className="container text-center">
            <h2 className="mb-10 text-xl">Edit Movie</h2>
            <form onSubmit={saveData}>
                <div className="row justify-content-center">
                    <div className="col-sm-3">
                        <label className="block">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Title
                            </span>
                            <input
                                type="text"
                                name="title"
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <span>{props.errors.title}</span>
                        </label>
                        <label className="block">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Year
                            </span>
                            <input
                                type="number"
                                min={1800}
                                max={2022}
                                step={1}
                                name="title"
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                            />
                            <span>{props.errors.year}</span>
                        </label>
                        <label className="block">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Creator
                            </span>
                            <input
                                type="text"
                                name="creator"
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                value={creator}
                                onChange={(e) => setCreator(e.target.value)}
                            />
                            <span>{props.errors.creator}</span>
                        </label>

                        <label className="block">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Category
                            </span>
                            <input
                                type="text"
                                name="category"
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                            <span>{props.errors.category}</span>
                        </label>

                        <label className="block">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Quantity
                            </span>
                            <input
                                type="number"
                                min={1}
                                max={30}
                                name="quantity"
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                            <span>{props.errors.quantity}</span>
                        </label>

                        <label className="block">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Description
                            </span>
                            <input
                                type="text"
                                name="description"
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <span>{props.errors.description}</span>
                        </label>

                        <label className="block">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Price
                            </span>
                            <input
                                type="number"
                                name="description"
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                            <span>{props.errors.price}</span>
                        </label>
                        <label className="block">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Image
                            </span>
                            <input
                                type="url"
                                pattern="https://.*"
                                size={30}
                                name="image"
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                            <span>{props.errors.image}</span>
                        </label>

                        <InertiaLink href="/admin">
                            <button className="btn btn-warning mt-3 mr-10">
                                back
                            </button>
                        </InertiaLink>
                        <button className="btn btn-info mt-3">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Edit;
