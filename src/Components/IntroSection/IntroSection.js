//The First section of the landing page

import React from "react";
import BackgroundSlider from "react-background-slider";
import styles from "./IntroSection.module.css";
import image1 from "../../Asset/Images/bgImage1.jpg";
import image2 from "../../Asset/Images/bgImage2.jpg";
import image3 from "../../Asset/Images/bgImage3.jpg";
import image4 from "../../Asset/Images/bgImage4.jpg";

import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { usertype } from "../../Actions/status";
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
          <button onClick={handleRegisterTruck}>Register Truck</button>
          <button
            onClick={() => {
              navigate("/login");
            }}
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
    //       </div>
    //       <BackgroundSlider
    //         // Custom NPM package for the background images feature
    //         images={[image1, image2, image3, image4]}
    //         duration={8}
    //         transition={3}
    //       />
    //     </div>
  );
};

export default IntroSection;
