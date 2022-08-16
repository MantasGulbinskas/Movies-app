import React from "react";
import photo from "../../../images/err-img.png";
import "../../../scss/Errors/404.scss";
import { Link } from "@inertiajs/inertia-react";

function WrongName() {
    return (
        <div className="error-page min-h-screen">
            <div className="container">
                <div className="row min-h-screen ">
                    <div className="flex  justify-center mt-20">
                        <img src={photo} alt="error" />
                    </div>
                    <h1 className="mt-10 text-white text-6xl">
                        Page not found
                    </h1>
                    <Link href="/">
                        <button className="home-button mt-10">Go gome</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default WrongName;
