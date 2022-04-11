import React from "react";
import styles from "./FleetSection.module.css";

const FleetSection = () => {
    return (
        <div className = {styles.fleet}>
            <h2>Our Fleet</h2>
            <p>
                Varieties of trucks you could choose from
            </p>
            <div className = {`${styles["fleet-grid"]}`}>

            </div>
        </div>
    );
}
 
export default FleetSection;