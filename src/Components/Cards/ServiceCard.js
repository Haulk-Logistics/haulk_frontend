import React, {useState} from "react";
import styles from "./ServiceCard.module.css";

const ServiceCard = (props) => {
    return (
        <div className = {styles.serviceCard}>
            <div className = {`${styles["serviceCard-circle"]}`}>
                <img src={props.image} alt=""/>
            </div>
            <div className = {`${styles["serviceCard-heading"]}`}>
                <h4>{props.heading}</h4>
            </div>
            <div className = {`${styles["serviceCard-text"]}`}>
                <p>{props.text}</p>
            </div>
        </div>
    );
}
 
export default ServiceCard;