import React from "react";

function Errors(props) {

    return (
        <div id="errors">
            {props.errors ? props.errors.map((err, index) => {
                return <p className="error" key={index}>{err.msg}</p>
            }) : null}                    
        </div> 
    )
    
}

export default Errors;