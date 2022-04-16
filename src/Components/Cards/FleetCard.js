import React from "react";
import styles from "./FleetCard.module.css";

const FleetCard = (props) => {
  console.log(props);

  return (
    <div className={`${styles.truckCard}`}>
      <div className={`${styles["truck-img"]}`}>
        <img src={props.image} alt="" />
      </div>
      <div className={`${styles["truck-type"]}`}>
        <p>{props.type}</p>
      </div>
    </div>
  );
};

export default FleetCard;
