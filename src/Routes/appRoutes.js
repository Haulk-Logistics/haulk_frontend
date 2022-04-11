import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import Forgotpasswordpage from "../Pages/Login/forgotpassword";
import Loginpage from "../Pages/Login/login";
import Resetpasswordpage from "../Pages/Login/resetpassword";
import RegisterTruck from "../Pages/Registertruck/RegisterTruck";
import SignupPage from "../Pages/signuppage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/hksignup" element={<SignupPage />} />
        <Route exact path="/regtruck" element={<RegisterTruck />} />
        <Route exact path="/login" element={<Loginpage />} />
        <Route exact path="/forgotpassword" element={<Forgotpasswordpage />} />
        <Route exact path="/resetpassword" element={<Resetpasswordpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
