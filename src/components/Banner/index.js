import React from "react";
import "./style.scss";

const Banner = ({ title, description }) => {
    return (
        <div className="banner">
            <div className="banner-title">{title}</div>
            <div className="banner-description">{description}</div>
        </div>
    );
};

export default Banner;
