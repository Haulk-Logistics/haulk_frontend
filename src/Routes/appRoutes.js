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
import ConfirmEmail from "../Pages/ConfirmEmail/ConfirmEmail";
import BookPage from "../Pages/BookPage";
import AdminHomePage from "../Pages/AdminHomePage";
import AdminDriverPage from "../Pages/AdminDriverPage";
import EmailVerified from "../Pages/signuppage/EmailVerified";
import DriverDashboard from "../Pages/TruckDriverDashboard/DriverDashboard";
import DriverHome from "../Components/TruckDriver/Home";
import { LandingLayout } from "../Components/layout";
import CargoOwnerDashboard from "../Pages/CargoOwnerDashboard/CargoOwnerDashboard";
import CargoHome from "../Components/CargoOwner/Home";
import TruckRequest from "../Components/CargoOwner/TruckRequest";
import TrackOrder from "../Components/CargoOwner/TrackOrder";
import CargoOrderHistory from "../Components/CargoOwner/OrderHistory";
import BookOrderDetails from "../Components/CargoOwner/BookOrderDetails";
import OrderHistoryDetails from "../Components/CargoOwner/OrderHistoryDetails";
import TermsAndConditions from "../Components/TermsAndConditions/TermsAndConditions";
import DriverDetail from "../Components/DriverDetail/DriverDetail";
import ActiveOrder from "../Components/TruckDriver/ActiveOrder";
import OrderHistory from "../Components/TruckDriver/OrderHistory";

const AppRoutes = () => {
  // useSelector connects us to the redux store
  const alertState = useSelector((state) => state.alert);

  return (
    <Fragment>
      {
        alertState.type && (
          <Messagepop
            head={alertState.title}
            message={alertState.message}
            err={alertState.type}
          />
        )
      }

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingLayout />}>
            <Route exact index element={<LandingPage />} />
            <Route exact path="/resources" element={<ResourcesPage />} />
          </Route>

          <Route exact path="/signup" element={<SignupPage />} />
          <Route exact path="/regtruck" element={<RegisterTruck />} />
          <Route exact path="/login" element={<Loginpage />} />
          <Route exact path="/book-truck" element={<BookPage />} />
          <Route exact path="/forgotpassword" element={<Forgotpasswordpage />} />
          <Route exact path="/resetpassword" element={<Resetpasswordpage />} />
          <Route exact path="/adminlogin" element={<Adminlogin />} />
          <Route exact path="/admin-home" element={<AdminHomePage />}/>
          <Route exact path="/admin-driver" element={<AdminDriverPage />}/>
          <Route exact path="/admin-driver/:id" element={<DriverDetail />} />
          <Route exact path="*" element={<ErrorPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/book-truck" element={<BookPage />} />
          <Route path="" element={<ErrorPage />} />
          <Route exact path="/confirmemail" element={<ConfirmEmail />} />
          <Route exact path="/verified" element={<EmailVerified />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/driverdashboard" exact element={<DriverDashboard />}>
            <Route index exact path="/driverdashboard/" element={<DriverHome />} />
            <Route path="orders" exact element={<ActiveOrder />} />
            <Route path="orderhistory" exact element={<OrderHistory />} />
          </Route>
          <Route exact path="/cargodashboard" element={<CargoOwnerDashboard />}>
            <Route
              index
              exact
              path="/cargodashboard/"
              element={<CargoHome />}
            />
            <Route path="truck-request">
              <Route index element={<TruckRequest />} />
              <Route path="bookorder-details" element={<BookOrderDetails />} />
            </Route>
            <Route path="track-order" element={<TrackOrder />} />
            <Route path="order-history" element={<CargoOrderHistory />} />
          </Route>
          <Route
            path='/orderhistorydetails'
            exact
            element={<OrderHistoryDetails />}
          />
          <Route
            path='/termsandconditions'
            exact
            element={<TermsAndConditions />}
          />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default AppRoutes;
