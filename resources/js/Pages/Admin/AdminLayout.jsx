import React, { useState, useEffect } from "react";
import Table from "@/Pages/Admin/Table";
import { Link } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/inertia-react";
import Success from "./Success";
import Header from "@/Layouts/Header";
import "../../../scss/Admin/AdminLayout.scss";

export default function AdminLayout() {
    const [showAlert, setShowAlert] = useState(true);
    const { flash } = usePage().props;
    useEffect(() => {
        const Alert = setTimeout(() => {
            setShowAlert(false);
        }, 5000);

        return () => {
            clearTimeout(Alert);
            setShowAlert(true);
        };
    }, []);

    return (
        <>
            <Header />
            <Success showAlert={showAlert} success={flash.success} />
            <Link href="/admin/create">
                <button className="create-button">Create new</button>
            </Link>
            <Table />
        </>
    );
}
