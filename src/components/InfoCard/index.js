import React from "react";
import "./style.scss";

const InfoCard = ({ number, title, description }) => {
    return (
        <div className="info-card-wrap">
            <div className="info-card-number">{number}</div>
            <div className="info-card-content-wrap">
                <div className="info-card-content-title">{title}</div>
                <div className="info-card-content-description">
                    {description}
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
