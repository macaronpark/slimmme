import React from "react";
import "./style.scss";
import { Button } from "..";
import { CATEGORY } from "../../common/constants";

const HeaderMenuBar = ({ className }) => {
    return (
        <div className={className}>
            {CATEGORY.map((category) => (
                <Button key={category.id} className="navi-menu-bar-button">
                    {category.name}
                </Button>
            ))}
        </div>
    );
};

export default HeaderMenuBar;
