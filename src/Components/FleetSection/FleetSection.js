import React from "react";
import styles from "./FleetSection.module.css";
import FleetCard from "../Cards/FleetCard";
import truckImage1 from "../../Assets/Images/truckImage1.jpg";
import truckImage2 from "../../Assets/Images/truckImage2.jpg";
import truckImage3 from "../../Assets/Images/truckImage3.jpg";
import truckImage4 from "../../Assets/Images/truckImage4.jpg";
import truckImage5 from "../../Assets/Images/truckImage5.jpg";

const FleetSection = () => {
  //Props to be passed into the fleet cards
  const properties = [
    {
      class: "item1",
      image: truckImage1,
      type: "Mini Trucks",
    },
    {
      class: "item2",
      image: truckImage2,
      type: "Trailers",
    },
    {
      class: "item3",
      image: truckImage3,
      type: "Truck Heads",
    },
    {
      class: "item4",
      image: truckImage4,
      type: "Flat Beds",
    },
    {
      class: "item5",
      image: truckImage5,
      type: "Box Trucks",
    },
  ];

  return (
    <div className={styles.fleet}>
      <h2>Our Fleet</h2>
      <p>Varieties of trucks you could choose from</p>
      <div className={`${styles["fleet-grid"]}`}>
        {/* Container for the fleet cards */}
        <FleetCard
          image={properties[0].image}
          type={properties[0].type}
        />
        <FleetCard
          image={properties[1].image}
          type={properties[1].type}
        />
        <FleetCard
          image={properties[2].image}
          type={properties[2].type}
        />
        <FleetCard
          image={properties[3].image}
          type={properties[3].type}
        />
        <FleetCard
          image={properties[4].image}
          type={properties[4].type}
        />
      </div>
    </div>
  );
};

export default FleetSection;
