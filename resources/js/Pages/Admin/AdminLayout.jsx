import React from "react";
import '../../../scss/Admin/AdminLayout.scss';
import Table from '@/Pages/Admin/Table';
import { Link } from "@inertiajs/inertia-react";

export default function AdminLayout() {
    return (
        <>
            <Link href="/" >
            <button className='search-button'>Home</button>
            </Link>
            <Link href="/admin/create">
                <button className="search-button">Create new</button>
            </Link>
            <Table />
            </>
    )
}