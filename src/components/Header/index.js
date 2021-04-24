import React from "react";
import "./style.scss";
import { ReactComponent as Wordmark } from "./wordmark.svg";
import { HeaderIconBar, HeaderMenuBar } from "../../components";
import { useHistory } from "react-router-dom";

const Header = () => {
    const history = useHistory();

    const handleWordmarkClick = () => {
        history.push("/");
    };

    const handleMenuClick = (name) => {
        history.push(`/${name}`);
    };

    return (
        <div className="header-wrap">
            <Wordmark className="wordmark" onClick={handleWordmarkClick} />
            <HeaderMenuBar
                className="menu-bar"
                onClick={(name) => handleMenuClick(name)}
            />
            <HeaderIconBar />
        </div>
    );
};

export default Header;
