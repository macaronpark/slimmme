import React from "react";
import "./style.scss";
import { InfoCard } from "../../components";

const Info = ({ className }) => {
    const lorem =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus efficitur ornare. Curabitur fringilla congue bibendum. Curabitur gravida pretium scelerisque.";

    return (
        <div className={`info-wrap ${className}`}>
            <div className="info-content-wrap">
                <InfoCard number="01" title="pr-title" description={lorem} />
                <InfoCard number="02" title="pr-title" description={lorem} />
                <InfoCard number="03" title="pr-title" description={lorem} />
            </div>
        </div>
    );
};

export default Info;
