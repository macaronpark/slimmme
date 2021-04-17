import React from "react";
import "./style.scss";
import { ReactComponent as Title } from "./title.svg";
import { ReactComponent as Description } from "./description.svg";

const Banner = ({ title, description }) => {
    return (
        <div className="banner">
            <div className="title">
                <Title className="svg" />
            </div>
            <div className="description">
                <Description className="svg" />
            </div>
        </div>
    );
};

export default Banner;
