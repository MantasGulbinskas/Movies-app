import React from "react";

const Success = ({ showAlert, success }) => {
    return (
        <>
            {showAlert && success && (
                <div className="alert alert-success alert-title">{success}</div>
            )}
        </>
    );
};

export default Success;
