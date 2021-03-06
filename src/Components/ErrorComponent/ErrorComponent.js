//Component for the 404 Error Page
import React from "react";
import {useNavigate} from "react-router";

import styles from "./ErrorComponent.module.css";
import errorImage from "../../Asset/Images/errImage.svg";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.errorWrapper}>
      <div className={`${styles["errorWrapper-img"]}`}>
        <img src={errorImage} alt="" />
      </div>
      <div className={`${styles["errorWrapper-text"]}`}>
        <p>Oops! We don’t know where that is.</p>
      </div>
      <div className={`${styles["errorWrapper-btn"]}`}>
        <button onClick = {() => navigate("/")}>Go back to safety</button>
      </div>
    </div>
  );
};

export default ErrorPage;
