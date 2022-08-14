import React from "react";

const Success = ({ showNotification, success }) => {
    return (
        <>
        
            {showNotification && success && (
                <div className="alert alert-success alert-title" >
                    { success }                 
           </div>
        )}
        </>
    )
}

export default Success;