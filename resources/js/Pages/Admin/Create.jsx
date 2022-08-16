import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";

const Create = (props) => {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState(0);
    const [creator, setCreator] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
    );
    const [description, setDescription] = useState("");
    const saveData = (e) => {
        e.preventDefault();
        Inertia.post("/admin/add", {
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
        <>
            <div className="container text-center ">
                <h2 className="text-xl mt-10">Create New Movie</h2>
                <form onSubmit={saveData}>
                    <div className="row justify-content-center mt-10">
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
                                    onChange={(e) =>
                                        setCategory(e.target.value)
                                    }
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
                                    onChange={(e) =>
                                        setQuantity(e.target.value)
                                    }
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
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                />
                                <span>{props.errors.description}</span>
                            </label>

                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Price
                                </span>
                                <input
                                    type="number"
                                    name="price"
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
                            <button className="btn btn-info mt-3 ">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Create;
