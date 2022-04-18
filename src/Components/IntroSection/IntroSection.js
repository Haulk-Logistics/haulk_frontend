//The First section of the landing page

import React from "react";
import {Link} from "react-router-dom";
import BackgroundSlider from "react-background-slider";
import styles from "./IntroSection.module.css";
import image1 from "../../Assets/Images/bgImage1.jpg";
import image2 from "../../Assets/Images/bgImage2.jpg";
import image3 from "../../Assets/Images/bgImage3.jpg";
import image4 from "../../Assets/Images/bgImage4.jpg";

const IntroSection = (props) => {
    return (
        <div className = {styles.introSection}>
            <div className={`${styles['introSection-main']}`}>
                <h1>
                    Logistics has never been easier.
                </h1>
                <p>
                    Providing end-to-end logistics solutions for Individuals, companies and government agencies.
                </p>
                <div className = {`${styles['introSection-buttons-container']}`}>
                    <Link to = "/register-truck">
                        <button className = {styles.registerBtn}>Register Truck</button>
                    </Link>
                    <Link to = "/book-truck">
                        <button className = {styles.bookBtn}>Book a Truck</button>
                    </Link>

                </div>
            </div>
            <BackgroundSlider
            // Custom NPM package for the background images
                images = {[image1, image2, image3, image4]}
                duration = {8}
                transition = {3}
            />
        </div>
    );
}
 
export default IntroSection;