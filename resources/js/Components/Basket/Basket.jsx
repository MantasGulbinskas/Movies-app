import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

export default function Basket() {
    return (
        <div className="bag-container">
            <FontAwesomeIcon className="shopping-icon" icon={faBagShopping} />
        </div>
    );
}
