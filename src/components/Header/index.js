import React from "react";
import "./style.scss";
import { ReactComponent as Wordmark } from "./wordmark.svg";
import { HeaderIconBar, HeaderMenuBar } from "../../components";

const Header = () => {
    return (
        <div className="header-wrap">
            <Wordmark className="wordmark" />
            <HeaderMenuBar className="menu-bar" />
            <HeaderIconBar />
        </div>
    );
};

export default Header;
