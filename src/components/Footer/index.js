import React from "react";
import "./style.scss";
import { ReactComponent as Wordmark } from "./wordmark.svg";
import { Button } from "..";
import { LinkedIn, Instagram, Twitter } from "@material-ui/icons";

const Footer = () => {
    return (
        <div className="footer-wrap">
            <Wordmark className="footer-wordmark" />
            <div className="footer-middle-wrap">
                <div className="footer-middle-address">
                    slimmme Inc. | CEO Suzy Park Earth, Tail of the world,{" "}
                    <br />
                    somewhere Telecommunication sales business report number:{" "}
                    <br />
                    0000-XXXX-00000 Corporate registration number 000-00-00000{" "}
                    <br />
                    Customer Service 000-000-0000 | Email xxx@xxx.xx.xx | <br />
                    Hosting slimmme Inc.
                </div>
                <div>
                    <Button
                        variant="gost"
                        className="footer-middle-social-button"
                    >
                        <LinkedIn />
                    </Button>

                    <Button
                        variant="gost"
                        className="footer-middle-social-button"
                    >
                        <Instagram />
                    </Button>

                    <Button
                        variant="gost"
                        className="footer-middle-social-button"
                    >
                        <Twitter />
                    </Button>
                </div>
            </div>
            <div className="footer-end-wrap">
                <div className="footer-end-copyright">
                    ⓒ Slime Inc. All rights reserved.
                </div>
                <div className="footer-end-terms-button-wrap">
                    <Button variant="gost" className="footer-end-terms-button">
                        Terms of Sale
                    </Button>

                    <Button variant="gost" className="footer-end-terms-button">
                        Terms of Use
                    </Button>

                    <Button variant="gost" className="footer-end-terms-button">
                        Privacy Policy
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
