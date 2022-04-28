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
import EmailVerified from "../Pages/signuppage/EmailVerified";
import DriverDashboard from "../Pages/TruckDriverDashboard/DriverDashboard";
import DriverHome from "../Components/TruckDriver/Home";
import UserDashboard from "../Components/UserDashboard/UserDashboard";
import CargoOwnerDashboard from "../Pages/CargoOwnerDashboard/CargoOwnerDashboard";
import OrderHistoryDetails from "../Components/CargoOwner/OrderHistoryDetails";
import TermsAndConditions from "../Components/TermsAndConditions/TermsAndConditions";

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
					<Route exact path='/' element={<LandingPage />} />
					<Route exact path='/signup' element={<SignupPage />} />
					<Route exact path='/regtruck' element={<RegisterTruck />} />
					<Route exact path='/login' element={<Loginpage />} />
					<Route
						exact
						path='/forgotpassword'
						element={<Forgotpasswordpage />}
					/>
					<Route exact path='/resetpassword' element={<Resetpasswordpage />} />
					<Route exact path='/adminlogin' element={<Adminlogin />} />
					<Route path='/resources' element={<ResourcesPage />} />
					<Route path='/book-truck' element={<BookPage />} />
					<Route path='' element={<ErrorPage />} />
					<Route exact path='/confirmemail' element={<ConfirmEmail />} />
					<Route exact path='/verified' element={<EmailVerified />} />
					<Route path='/book-truck' element={<BookPage />} />
					<Route path='*' element={<ErrorPage />} />
					<Route path='/driverdashboard' exact element={<DriverDashboard />} />
					<Route path='/driverhome' exact element={<DriverHome />} />
					<Route
						path='/cargodashboard'
						exact
						element={<CargoOwnerDashboard />}
					/>
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
