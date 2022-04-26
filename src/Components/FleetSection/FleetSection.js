import React from "react";
import styles from "./FleetSection.module.css";
import FleetCard from "../Cards/FleetCard";
import truckImage1 from "../../Asset/Images/truckImg1.webp";
import truckImage2 from "../../Asset/Images/truckImg2.webp";
import truckImage3 from "../../Asset/Images/truckImg3.webp";
import truckImage4 from "../../Asset/Images/truckImg4.webp";
import truckImage5 from "../../Asset/Images/truckImg5.webp";
import truckImage6 from "../../Asset/Images/truckImg6.webp";

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
    {
      class: "item6",
      image: truckImage6,
      type: "Refrigerated Trucks",
    },
  ];

  return (
    <div className={styles.fleet}>
      <h2>Our Fleet</h2>
      <p>Varieties of trucks you could choose from</p>
      <div className={`${styles["fleet-grid"]}`}>
        {/* Container for the fleet cards */}
        <FleetCard image={properties[0].image} type={properties[0].type} />
        <FleetCard image={properties[1].image} type={properties[1].type} />
        <FleetCard image={properties[2].image} type={properties[2].type} />
        <FleetCard image={properties[3].image} type={properties[3].type} />
        <FleetCard image={properties[4].image} type={properties[4].type} />
        <FleetCard image={properties[5].image} type={properties[5].type} />
      </div>
    </div>
  );
};

export default FleetSection;
