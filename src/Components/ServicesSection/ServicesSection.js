//The second section of the Landing Page

import React, {useState} from "react";
import styles from "./ServicesSection.module.css";
import ServiceCard from "../Cards/ServiceCard";
import haulageIcon from "../../Assets/Icons/haulageIcon.svg";
import promptDeliveryIcon from "../../Assets/Icons/promptDeliveryIcon.svg";
import experienceIcon from "../../Assets/Icons/experienceIcon.svg";
import image1 from "../../Assets/Images/image1.jpg";
import image2 from "../../Assets/Images/image2.jpg";


const ServicesSection = () => {
    const properties = [
        {
            image: haulageIcon,
            heading: 'Haulage',
            text: 'Moving your goods wherever, whenever. Without hassle.'
        }, {
            image: promptDeliveryIcon,
            heading: 'Prompt Delivery',
            text: 'We deliver on time and with your goods in perfect shape.'
        }, {
            image: experienceIcon,
            heading: 'Experience',
            text: 'We have a team of seasoned professionals taking care of your goods every step of its way.'
        }
    ];

    return (
        <div className = {styles.services}>
            <h2>Our Services</h2>
            <p>What we have to offer</p>
            <div className = {styles.servicesCards}>
                {/* Container for services Card */}
                <ServiceCard
                    image = {properties[0].image}
                    heading = {properties[0].heading}
                    text = {properties[0].text}
                />
                <ServiceCard
                    image = {properties[1].image}
                    heading = {properties[1].heading}
                    text = {properties[1].text}
                />
                <ServiceCard
                    image = {properties[2].image}
                    heading = {properties[2].heading}
                    text = {properties[2].text}
                />
            </div>
            <div className = {styles.servicesDescription}>
                <div className = {`${styles['servicesDescription-one']}`}>
                    <div className = {`${styles['description-text']}`}>
                        <h2>Reliable. Fast. Efficient.</h2>
                        <p>
                            Leveraging on a  logistics company with the above qualities in place already is a smart business move. You can count on us to deliver, on time, nearly every time. Furthermore, we have contingencies in place in the event that something does go wrong, something many businesses don’t consider. The safety of your consignment is on our mind for every second we have it in our care.
                        </p>
                        <button>Book a Truck</button>
                    </div>
                    <div className = {`${styles['description-image']}`}>
                        <img src={image1} alt=""/>
                    </div>
                </div>
                <div className = {`${styles['servicesDescription-two']}`}>
                    <div className = {`${styles['description-image']}`}>
                        <img src={image2} alt=""/>
                    </div>
                    <div className = {`${styles['description-text']}`}>
                        <h2>Earn as a Transporter</h2>
                        <p>
                            You can add your truck to our fleet and get more market visibility, better paying customers and jobs. Free access to truck maintenance facilities like discounts and insurance. Opportunity to work with the best in the industry and earn a steady income with your truck.
                        </p>
                        <button>Resgister Truck</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ServicesSection;