import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@/../scss/Admin/Admin.scss';

export default function Admin() {
    return (
        <FontAwesomeIcon className="admin-icon" icon={faUser} />
    )
}