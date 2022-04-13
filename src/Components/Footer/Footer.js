import React from "react";
import styles from "./Footer.module.css";
import WebLogo from "../../Assets/Icons/webLogo.svg";
import MobileLogo from "../../Assets/Icons/mobileLogo.svg";

const Footer = () => {
    const link = '#';

    return (
        <div className = {styles.footer}>
            <div className = {`${styles['footer-top']}`}>
                <div className = {`${styles['footer-logo']}`}>
                    <a href = {link}>
                        <picture>
                            <source srcset = {MobileLogo} media = "(max-width: 23.4375rem)"></source>
                            <img src={WebLogo} alt="Haulk's Logo"/>
                        </picture>
                    </a>
                </div>
                <div className = {`${styles['footer-tabs']}`}>
                    <div>
                        <h5>Resources</h5>
                        <a href = {link}>FAQs</a>
                        <a href = {link}>Contact Us</a>
                    </div>
                    <div>
                        <h5>About us</h5>
                        <a href = {link}>Who we are</a>
                    </div>
                    <div>
                        <h5>Services</h5>
                        <a href = {link}>Register truck</a>
                    </div>
                </div>
            </div>
            <div className = {`${styles['footer-bottom']}`}>
                <p>Haulk Logistics is a company that aims to facilitate the stress-free, careful and speedy movement of goods from one point to another within Nigeria.</p>
                <p>
                Copyright © 2022 Haulk Logistics. All rights reserved
                </p>
            </div>
        </div>
    );
}
 
export default Footer;