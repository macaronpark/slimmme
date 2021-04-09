import React from "react";
import "./style.scss";
import { Button } from "..";
import {
    Search,
    FavoriteBorderOutlined,
    ShoppingBasketOutlined,
    Face,
    MenuOutlined,
} from "@material-ui/icons";

const HeaderIconBar = ({ className }) => {
    return (
        <div className={className}>
            <Button variant="gost" className="navi-icon-bar-button-search">
                <Search />
            </Button>

            <Button variant="gost" className="navi-icon-bar-button-favorite">
                <FavoriteBorderOutlined />
            </Button>

            <Button variant="gost" className="navi-icon-bar-button-cart">
                <ShoppingBasketOutlined />
            </Button>

            <Button variant="gost" className="navi-icon-bar-button-user">
                <Face />
            </Button>

            <Button variant="gost" className="navi-icon-bar-button-menu">
                <MenuOutlined />
            </Button>
        </div>
    );
};

export default HeaderIconBar;
