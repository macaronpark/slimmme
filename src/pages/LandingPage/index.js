import React from "react";
import "./style.scss";
import {
    Banner,
    CategoryCarousel,
    Footer,
    Header,
    Info,
} from "../../components";

const LandingPage = () => {
    return (
        <>
            <div className="landing-page-header">
                <Header />
            </div>
            <div className="landing-page-wrap">
                <div className="landing-page-content-wrap">
                    <Banner title="title of banner" description="description" />
                    <CategoryCarousel title="category 1" />
                    <CategoryCarousel title="category 2" />
                    <div className="landing-page-content-info">
                        <Info />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default LandingPage;
