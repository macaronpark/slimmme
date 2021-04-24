import React from "react";
import "./style.scss";
import { Button } from "../../components";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { ReactComponent as SoldOutMild } from "./soldout-mild.svg";
import { ReactComponent as SoldOutVenom } from "./soldout-venom.svg";
import { ReactComponent as SoldOutUnique } from "./soldout-unique.svg";

const CategoryCarousel = ({ title }) => {
    const dummy = {
        mild: {
            image: <SoldOutMild className="image" />,
            count: 4,
        },
        venomous: {
            image: <SoldOutVenom className="image" />,
            count: 4,
        },
        unique: {
            image: <SoldOutUnique className="image" />,
            count: 4,
        },
        etc: {
            image: <SoldOutMild className="image" />,
            count: 4,
        },
    };

    return (
        <div className="category-carousel">
            <div className="header">
                <div className="title">{title}</div>
                <div>
                    <Button variant="gost" className="button">
                        <ChevronLeft />
                    </Button>
                    <Button variant="gost" className="button-last">
                        <ChevronRight />
                    </Button>
                </div>
            </div>

            <div className="category-carousel-image-wrap">
                {Array.from(Array(dummy[title].count).keys()).map((item) => (
                    <div className="loaf">{dummy[title].image}</div>
                ))}
            </div>
        </div>
    );
};

export default CategoryCarousel;
