import React, {useState, useEffect} from "react";
import '../../../scss/Admin/AdminLayout.scss';
import Table from '@/Pages/Admin/Table';
import { Link } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/inertia-react";
import Success from "./Success";
import Header from "@/Layouts/Header";


export default function AdminLayout() {
    const [showNotification, setShowNotification] = useState(true);
        const { flash } = usePage().props;

    useEffect(() => {
        const notificationTimer = setTimeout(() => {
            setShowNotification(false);
        }, 3500);

        return () => {
            clearTimeout(notificationTimer);
            setShowNotification(true);
        }
    }, []);

    return (
        <>
            <Header />
            <Success showNotification={showNotification} success={flash.success} />
            <Link href="/admin/create">
                <button className="search-button">Create new</button>
            </Link>
            <Table />
            </>
    )
}