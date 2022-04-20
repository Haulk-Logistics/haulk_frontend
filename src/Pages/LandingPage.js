import React from "react";
import LandingPageNavbar from "../Components/LandingPageNavbar/LandingPageNavbar";
import IntroSection from "../Components/IntroSection/IntroSection";
import ServicesSection from "../Components/ServicesSection/ServicesSection";
import FleetSection from "../Components/FleetSection/FleetSection";
import TestimonialSection from "../Components/TestimonialSection/TestimonialSection";
import Subscribe from "../Components/SubscribeSection/Subscribe";

const LandingPage = () => {


    return (
        <div>
            <LandingPageNavbar/>
            <IntroSection/>
            <ServicesSection/>
            <FleetSection/>
            <TestimonialSection/>
            <Subscribe />
        </div>
    );
}
 
export default LandingPage;