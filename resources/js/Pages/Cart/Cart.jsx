import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import Header from "@/Layouts/Header";
import CartList from "./CartList";


export default function Cart() {
    const carts = usePage().props
    console.log(carts)
    return (
        <>
            <Header />
            <h2 className="text-white max-w-xl mx-12">Shopping Cart</h2>

            <div className="container mx-auto border border-indigo-600">
           
            </div>
        </>
    )
}