//The second section of the Landing Page

import React from "react";
import styles from "./ServicesSection.module.css";
import ServiceCard from "../Cards/ServiceCard";
import haulageIcon from "../../Asset/Icons/haulageIcon.svg";
import promptDeliveryIcon from "../../Asset/Icons/promptDeliveryIcon.svg";
import experienceIcon from "../../Asset/Icons/experienceIcon.svg";
import image1 from "../../Asset/Images/serviceImg1.webp";
import image2 from "../../Asset/Images/serviceImg2.webp";

const ServicesSection = () => {
  //Properties to be passed into the services cards
  const properties = [
    {
      image: haulageIcon,
      heading: "Haulage",
      text: "Moving your goods wherever, whenever. Without hassle.",
    },
    {
      image: promptDeliveryIcon,
      heading: "Prompt Delivery",
      text: "We deliver on time and with your goods in perfect shape.",
    },
    {
      image: experienceIcon,
      heading: "Experience",
      text: "We provide a seamless experience at every step of the way.",
    },
  ];

  return (
    <div className={`${styles.services} container`}>
      <h2>Our Services</h2>
      <p>What we have to offer</p>
      <div className={styles.servicesCards}>
        {/* Container for the services card */}
        <ServiceCard
          image={properties[0].image}
          heading={properties[0].heading}
          text={properties[0].text}
        />
        <ServiceCard
          image={properties[1].image}
          heading={properties[1].heading}
          text={properties[1].text}
        />
        <ServiceCard
          image={properties[2].image}
          heading={properties[2].heading}
          text={properties[2].text}
        />
      </div>
      <div className={styles.servicesDescription}>
        <div className={`${styles["servicesDescription-one"]}`}>
          <div className={`${styles["description-text"]}`}>
            <h3>Reliable. Fast. Efficient.</h3>
            <p>
              Leveraging on a logistics company with the above qualities in
              place already is a smart business move. You can count on us to
              deliver, on time, nearly every time. Furthermore, we have
              contingencies in place in the event that something does go wrong,
              something many businesses don't consider. The safety of your
              consignment is on our mind for every second we have it in our
              care.
            </p>
            <button>Book a Truck</button>
          </div>
          <div className={`${styles["description-image"]}`}>
            <img src={image1} alt="" />
          </div>
        </div>
        <div className={`${styles["servicesDescription-two"]}`}>
          <div className={`${styles["description-image"]}`}>
            <img src={image2} alt="" />
          </div>
          <div className={`${styles["description-text"]}`}>
            <h3>Earn as a Transporter</h3>
            <p>
              You can add your truck to our fleet and get more market
              visibility, better paying customers and jobs. Free access to truck
              maintenance facilities like discounts and insurance. Opportunity
              to work with the best in the industry and earn a steady income
              with your truck. Registration is easy and can be done from your
              place of comfort anywhere in the world.
            </p>
            <button>Register Truck</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
