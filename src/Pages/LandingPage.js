import React, { useState } from "react";
import LandingPageNavbar from "../Components/LandingPageNavbar/LandingPageNavbar";
import IntroSection from "../Components/IntroSection/IntroSection";

const LandingPage = () => {
  return (
    <div>
      <LandingPageNavbar />
      <IntroSection />
    </div>
  );
};

export default LandingPage;
