import React, {useState} from "react";
import LandingPageNavbar from "../Components/LandingPageNavbar/LandingPageNavbar";
import IntroSection from "../Components/IntroSection/IntroSection";
import ServicesSection from "../Components/ServicesSection/ServicesSection";
import FleetSection from "../Components/FleetSection/FleetSection";

const LandingPage = () => {


    return (
        <div>
            <LandingPageNavbar/>
            <IntroSection/>
            <ServicesSection/>
            <FleetSection/>
        </div>
    );
}
 
export default LandingPage;