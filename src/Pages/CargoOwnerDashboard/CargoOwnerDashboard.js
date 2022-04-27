import React from 'react';
import SideBar from '../../Components/CargoOwner/SideBar';
import NavBar from '../../Components/CargoOwner/NavBar';
import style from './CargoOwnerDashboard.module.css';
import { useSelector } from 'react-redux';
import CargoHome from '../../Components/CargoOwner/Home';
import TruckRequest from '../../Components/CargoOwner/TruckRequest';
import TrackOrder from '../../Components/CargoOwner/TrackOrder';
import OrderHistory from '../../Components/TruckDriver/OrderHistory';

const CargoOwnerDashboard = () => {
	const pageToRender = useSelector((state) => state.dashboardRender);

	return (
		<div className={style.dashboard}>
			<SideBar />
			<div className={style.body}>
				<NavBar />
				<div className={style.body__content}>
					{pageToRender === '' ? (
						<CargoHome />
					) : pageToRender === 'truckRequest' ? (
						<TruckRequest />
					) : pageToRender === 'trackOrder' ? <TrackOrder /> :(
						<OrderHistory />
					)}
				</div>
			</div>
		</div>
	);
};

export default CargoOwnerDashboard;
