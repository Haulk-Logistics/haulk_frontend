import React from "react";
import SideBar from "../../Components/CargoOwner/SideBar";
import NavBar from "../../Components/CargoOwner/NavBar";
import style from "./CargoOwnerDashboard.module.css";
import { useSelector } from "react-redux";
import CargoHome from "../../Components/CargoOwner/Home";
import TruckRequest from "../../Components/CargoOwner/TruckRequest";
import TrackOrder from "../../Components/CargoOwner/TrackOrder";
import OrderHistory from "../../Components/TruckDriver/OrderHistory";
import { Outlet } from "react-router-dom";

const CargoOwnerDashboard = () => {
  const pageToRender = useSelector((state) => state.dashboardRender);

  return (
    <div className={style.dashboard}>
      <SideBar />
      <div className={style.body}>
        <NavBar />
        <div className={style.Cargobody__content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CargoOwnerDashboard;
