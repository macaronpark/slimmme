import React from "react";
import "./style.scss";
import { Header } from "../../components";

const LandingPage = () => {
    return (
        <>
            <div className="header">
                <Header />
            </div>
            <div className="wrap">
                <div className="contents">
                    <div className="banner">banner</div>
                    <div className="category">category</div>
                    <div className="category">category</div>
                    <div className="info">info</div>
                    <div className="footer">footer</div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
