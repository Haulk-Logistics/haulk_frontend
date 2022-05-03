import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from '../../../Pages/LandingPage';
import OrderHistory from '../DashboardPages/OrderHistory';
import TrackOrder from '../DashboardPages/TrackOrder';
import TruckRequest from '../DashboardPages/TruckRequest';
import UserDashboard from '../UserDashboard';

const PageRoutes = () => {
  return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<UserDashboard />} />
				<Route path='/truck-request' element={<TruckRequest />} />
				<Route path='/track-order' element={<TrackOrder />} />
				<Route path='/order-history' element={<OrderHistory />} />
				<Route path='/landing-page' element={<LandingPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default PageRoutes;