import React from "react";
import "./style.scss";
import { Footer, Header } from "../../components";
import { useRouteMatch } from "react-router-dom";
import { ReactComponent as SoldOutMild } from "./soldout-mild.svg";
import { ReactComponent as SoldOutVenom } from "./soldout-venom.svg";
import { ReactComponent as SoldOutUnique } from "./soldout-unique.svg";

const dummy = {
    mild: {
        image: <SoldOutMild className="image" />,
        count: 18,
    },
    venomous: {
        image: <SoldOutVenom className="image" />,
        count: 6,
    },
    unique: {
        image: <SoldOutUnique className="image" />,
        count: 2,
    },
    etc: {
        image: <SoldOutMild className="image" />,
        count: 7,
    },
};

const ProductPage = () => {
    const { path } = useRouteMatch();
    const type = path.slice(1, path.length);

    return (
        <>
            <div className="product-page-header">
                <Header />
            </div>
            <div className="product-page-wrap">
                <div className="content-wrap">
                    <div className="products">
                        {Array.from(Array(dummy[type].count).keys()).map(
                            (item) => (
                                <div className="loaf">
                                    {dummy[type].image}
                                    <div className="title">{`${type} #${
                                        item + 1
                                    }`}</div>
                                    <div className="desc">-</div>
                                    <div className="price">100,000￦</div>
                                </div>
                            )
                        )}
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default ProductPage;
