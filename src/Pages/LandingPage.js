import React from "react";
import LandingPageNavbar from "../Components/LandingPageNavbar/LandingPageNavbar";
import IntroSection from "../Components/IntroSection/IntroSection";
import ServicesSection from "../Components/ServicesSection/ServicesSection";
import FleetSection from "../Components/FleetSection/FleetSection";
import TestimonialSection from "../Components/TestimonialSection/TestimonialSection";

const LandingPage = () => {


    return (
        <div>
            <LandingPageNavbar/>
            <IntroSection/>
            <ServicesSection/>
            <FleetSection/>
            <TestimonialSection/>
        </div>
    );
}
 
export default LandingPage;