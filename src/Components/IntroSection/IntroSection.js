//The First section of the landing page

import React from "react";
import BackgroundSlider from "react-background-slider";
import styles from "./IntroSection.module.css";
import image1 from "../../Asset/Images/bgImg1.webp";
import image2 from "../../Asset/Images/bgImg2.webp";
import image3 from "../../Asset/Images/bgImg3.webp";
import image4 from "../../Asset/Images/bgImg4.webp";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { usertype } from "../../Store/Actions/status";

const IntroSection = (props) => {
  // useSelector connects us to the redux store

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // handleRegisterTruck takes you to truck driver signup
  const handleRegisterTruck = () => {
    // The dispatch changes the status of user to be truck driver automatically when they get to signup page
    dispatch(usertype("truckdriver"));
    navigate("/signup");
  };

  return (
    <div className={styles.introSection}>
      <div className={`${styles["introSection-main"]}`}>
        <h1>Logistics has never been easier.</h1>
        <p>
          Providing end-to-end logistics solutions for Individuals, companies
          and government agencies.
        </p>
        <div className={`${styles["introSection-buttons-container"]}`}>
          <button onClick={handleRegisterTruck} className = {styles.registerBtn}>Register Truck</button>
          <button
            onClick={() => {
              navigate("/login");
            }}
            className = {styles.bookBtn}
          >
            Book a Truck
          </button>
        </div>
      </div>
      <BackgroundSlider
        // Custom NPM package for the background images
        images={[image1, image2, image3, image4]}
        duration={8}
        transition={3}
      />
    </div>
  );
};

export default IntroSection;
