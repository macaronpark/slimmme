import React from "react";
import "./style.scss";

const Button = ({
    variant = "solid",
    disabled = false,
    icon,
    children,
    className,
    onClick,
}) => {
    return (
        <button
            type="button"
            disabled={disabled}
            className={`button-${variant} ${className}`}
            onClick={onClick}
        >
            {icon && icon}
            {children}
        </button>
    );
};

export default Button;
