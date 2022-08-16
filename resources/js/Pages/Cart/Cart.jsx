import React from "react";
import { usePage } from "@inertiajs/inertia-react";

export default function Cart(props) {
    const carts = usePage().props.basket.items;
    const addToCart = (e) => {
        Object.keys(carts).forEach((cart) => {
            if (props.data.id == e.target.name) {
                props.data.quantity = Number(e.target.value);
            }
        });
    };
    return (
        <div className="row mb-4 d-flex justify-content-between align-items-center">
            <div className="col-md-2 col-lg-2 col-xl-2">
                <img src={props.data.image_url} alt="item-image" />
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
                <h6 className="text-muted">{props.data.title}</h6>
                <h6 className="text-muted mb-0">{props.data.creator}</h6>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button className="btn btn-link px-2">
                    <i className="fas fa-minus"></i>
                </button>
                <input
                    type="number"
                    max={props.data.quantity}
                    onChange={addToCart}
                    defaultValue={1}
                    name="quantity"
                    min={1}
                    className="form-control form-control-sm"
                />
                <button className="btn btn-link px-2">
                    <i className="fas fa-plus"></i>
                </button>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h6 className="mb-0">€ {props.data.price}</h6>
            </div>
        </div>
    );
}
