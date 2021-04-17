import React from "react";
import "./style.scss";
import { Button } from "../../components";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { ReactComponent as PreviewImage } from "./sold-out.svg";

const CategoryCarousel = ({ title }) => {
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
                <div className="category-carousel-image">
                    <PreviewImage className="category-carousel-image-test" />
                </div>
                <div className="category-carousel-image">
                    <PreviewImage className="category-carousel-image-test" />
                </div>
                <div className="category-carousel-image">
                    <PreviewImage className="category-carousel-image-test" />
                </div>
                <div className="category-carousel-image-last">
                    <PreviewImage className="category-carousel-image-test" />
                </div>
            </div>
        </div>
    );
};

export default CategoryCarousel;
