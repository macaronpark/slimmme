import React from "react";
import "./style.scss";
import { Button, Footer, Header } from "../../components";
import { useLocation } from "react-router-dom";

import { ReactComponent as SoldOutMild } from "./soldout-mild.svg";

const DetailPage = () => {
    let query = new URLSearchParams(useLocation().search);
    const id = query.get("id");

    const dummyPhotos = [1, 2, 3, 4, 5, 6, 7];

    return (
        <>
            <div className="detail-page-header">
                <Header />
            </div>
            <div className="detail-page-wrap">
                <div className="content-wrap">
                    <div className="detail-wrap">
                        <div className="detail-pictures">
                            <div className="main-frame">
                                <SoldOutMild className="image" />
                            </div>
                            <div className="sub-frame">
                                {dummyPhotos.map((item) => {
                                    return (
                                        <SoldOutMild className="sub-frame-item" />
                                    );
                                })}
                            </div>
                        </div>
                        <div className="detail-contents">
                            <div className="product-title">{`Slime #${id}`}</div>
                            <div className="product-summary">
                                Donec sapien dui, congue ut ullamcorper in,
                                faucibus ac mi. Pellentesque ut arcu sit amet
                                mauris efficitur interdum nec eu velit.
                            </div>
                            <div className="product-price">
                                Price: 100,000￦
                            </div>
                            <Button className="product-add-to-cart-button">
                                Add to cart
                            </Button>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default DetailPage;
