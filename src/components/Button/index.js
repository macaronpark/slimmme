import React from "react";
import "./style.scss";

const Button = ({ disabled = false, children, className }) => {
    return (
        <button
            type="button"
            disabled={disabled}
            className={`button ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
