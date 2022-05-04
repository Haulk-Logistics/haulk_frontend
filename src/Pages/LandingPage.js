import React from "react";
import IntroSection from "../Components/IntroSection/IntroSection";
import ServicesSection from "../Components/ServicesSection/ServicesSection";
import FleetSection from "../Components/FleetSection/FleetSection";
import TestimonialSection from "../Components/TestimonialSection/TestimonialSection";
import Subscribe from "../Components/SubscribeSection/Subscribe";

const LandingPage = () => {
  return (
    <>
      <IntroSection />
      <ServicesSection />
      <FleetSection />
      <TestimonialSection />
      <Subscribe />
    </>
  );
};

export default LandingPage;
