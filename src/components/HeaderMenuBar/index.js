import React from "react";
import "./style.scss";
import { Button } from "..";
import { CATEGORY } from "../../common/constants";

const HeaderMenuBar = ({ onClick, className }) => {
    return (
        <div className={className}>
            {CATEGORY.map((category) => (
                <Button
                    key={category.id}
                    variant="gost"
                    className="navi-menu-bar-button"
                    onClick={() => {
                        onClick(category.name);
                    }}
                >
                    {category.name}
                </Button>
            ))}
        </div>
    );
};

export default HeaderMenuBar;
