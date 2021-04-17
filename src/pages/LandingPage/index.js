import React from "react";
import "./style.scss";
import {
    Banner,
    CategoryCarousel,
    Footer,
    Header,
    Info,
} from "../../components";
import { CATEGORY } from "../../common/constants";

const LandingPage = () => {
    return (
        <>
            <div className="landing-page-header">
                <Header />
            </div>
            <div className="landing-page-wrap">
                <div className="content-wrap">
                    <Banner
                        title="slimmme 2021 S/S"
                        description="stretch slow shimmer"
                    />
                    <CategoryCarousel title={CATEGORY[0].name} />
                    <CategoryCarousel title={CATEGORY[1].name} />
                    <CategoryCarousel title={CATEGORY[2].name} />
                    <CategoryCarousel title={CATEGORY[3].name} />
                    <div className="info">
                        <Info />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default LandingPage;
