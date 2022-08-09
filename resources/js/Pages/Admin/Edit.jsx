import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import React, {useState} from "react";


const Edit = (props) => {
    const movie = usePage().props.movie;
    const [title, setTitle] = useState(movie.title);
    const [year, setYear] = useState(movie.year);
    const [creator, setCreator] = useState(movie.creator);
    const [category, setCategory] = useState(movie.category);
    const [quantity, setQuantity] = useState(movie.quantity);
    const [image, setImage] = useState(movie.image_url);
    const [description, setDescription] = useState(movie.description);
    const saveData = (e) => {
        e.preventDefault();
        Inertia.post('/admin/edit/' + movie.id, {title, year, creator, category, quantity,image, description})
}

    return (
        <div className="container text-center ">
            <h2>Edit Movie</h2>
            <h1>{ movie.title}</h1>
        <form onSubmit={saveData}>
        <div className="row">
            <div className="col-sm-2 ">
                    <label>Title</label>
                <input type="text" name="title" className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}/>
                <span>{ props.errors.title}</span>
                <label>Year</label>
                <input type="number" name="year" className="form-control"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}/>
                      <span>{ props.errors.year}</span>

                <label>Creator</label>
                <input type="text" name="text" className="form-control"
                    value={creator}
                    onChange={(e) => setCreator(e.target.value)}/>
                <span>{ props.errors.creator}</span>

                <label>Category</label>
                <input type="text" name="category" className="form-control"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}/>
                <span>{ props.errors.category}</span>

                <label>Quantity</label>
                <input type="number" name="quantity" className="form-control"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    />
                     <span>{ props.errors.quantity}</span>

                    <label>description</label>
                <input type="text" name="description" className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}/>
                <span>{ props.errors.description}</span>

                <label>Image</label>
                <input type="text" name="image" className="form-control"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}/>
                <span>{ props.errors.image}</span>

                    <button type="submit" className="btn btn-info ">Submit</button>
            </div>
            </div>
            </form>

    </div>
    )
}

export default Edit;