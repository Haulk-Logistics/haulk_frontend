import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import RegisterTruck from "../Pages/Registertruck/RegisterTruck";
import SignupPage from "../Pages/signuppage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/hksignup" element={<SignupPage />} />
        <Route exact path="/regtruck" element={<RegisterTruck />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
