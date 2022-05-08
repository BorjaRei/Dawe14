import React from "react";

export const Button =({onClick, className = '', children} )=>{
    return (
        <button
            onClick={onClick}
            className={className}
            type="button"
        >{children}
        </button>
    );
}