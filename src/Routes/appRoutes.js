import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Messagepop from "../Components/ErrorComponent/alert";
import Adminlogin from "../Pages/Admin/login";
import LandingPage from "../Pages/LandingPage";
import Forgotpasswordpage from "../Pages/Login/forgotpassword";
import Loginpage from "../Pages/Login/login";
import Resetpasswordpage from "../Pages/Login/resetpassword";
import RegisterTruck from "../Pages/Registertruck/RegisterTruck";
import SignupPage from "../Pages/signuppage";
import ResourcesPage from "../Pages/ResourcesPage";
import ErrorPage from "../Pages/ErrorPage";

const AppRoutes = () => {
  // useSelector connects us to the redux store
  const alertState = useSelector((state) => state.alert);

  // console.log({ state });

  return (
    <Fragment>
      {alertState.type && (
        <Messagepop
          head={alertState.title}
          message={alertState.message}
          err={alertState.type}
        />
      )}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/signup" element={<SignupPage />} />
          <Route exact path="/regtruck" element={<RegisterTruck />} />
          <Route exact path="/login" element={<Loginpage />} />
          <Route
            exact
            path="/forgotpassword"
            element={<Forgotpasswordpage />}
          />
          <Route exact path="/resetpassword" element={<Resetpasswordpage />} />
          <Route exact path="/adminlogin" element={<Adminlogin />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default AppRoutes;
