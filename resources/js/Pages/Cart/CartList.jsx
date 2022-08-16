import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import Cart from "./Cart";
import Header from "@/Layouts/Header";

export default function CartList() {
    const items = usePage().props.basket.items;
    return (
        <>
            <Header />
            <section className="h-100 h-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12">
                            <div className="card card-registration card-registration-2">
                                <div className="card-body p-0">
                                    <div className="row g-0">
                                        <div className="col-lg-8">
                                            <div className="p-5">
                                                <div className="d-flex justify-content-between align-items-center mb-5">
                                                    <h1 className="fw-bold mb-0 text-black">
                                                        Shopping Cart
                                                    </h1>
                                                    <h6 className="mb-0 text-muted">
                                                        Items
                                                    </h6>
                                                </div>

                                                <hr className="my-4" />

                                                {Object.values(items).map(
                                                    (value, index) => {
                                                        return (
                                                            <div key={index}>
                                                                <Cart
                                                                    data={value}
                                                                />
                                                            </div>
                                                        );
                                                    }
                                                )}

                                                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                    <a
                                                        href="#!"
                                                        className="text-muted"
                                                    >
                                                        <i className="fas fa-times"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <hr className="my-4" />
                                            <div className="pt-5">
                                                <h6 className="mb-0">
                                                    <a
                                                        href="/"
                                                        className="text-body"
                                                    >
                                                        <i className="fas fa-long-arrow-alt-left me2"></i>
                                                        Back to shop
                                                    </a>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 bg-grey">
                                            <div className="p-5">
                                                <h3 className="fw-bold mb-t mt-2 pt-1">
                                                    Summary
                                                </h3>
                                                <hr className="my-4" />

                                                <div className="d-flex justify-content-between mb-4">
                                                    <h5 className="text-uppercase">
                                                        How much items
                                                    </h5>
                                                </div>
                                                <hr className="my-4" />

                                                <div className="d-flex justify-content-between mb-5">
                                                    <h5 className="text-uppercase">
                                                        Total price
                                                    </h5>
                                                    <h5>190 Eur</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
