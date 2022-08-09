import React from "react";

const Success = ({ showNotification, success }) => {
    return (
        <>
            {showNotification && success && (
                <div>{success }</div>
        )}
        </>
    )
}

export default Success;