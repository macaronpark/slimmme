import React from "react";
import "./style.scss";
import { Button } from "../../components";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { ReactComponent as PreviewImage } from "./category-preview.svg";

const CategoryCarousel = ({ title }) => {
    return (
        <div className="category-carousel">
            <div className="category-carousel-header">
                <div className="category-carousel-title">{title}</div>
                <div>
                    <Button variant="gost" className="category-carousel-button">
                        <ChevronLeft />
                    </Button>
                    <Button
                        variant="gost"
                        className="category-carousel-button-last"
                    >
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
