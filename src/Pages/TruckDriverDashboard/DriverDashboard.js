import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router";
import NavBar from "../../Components/TruckDriver/NavBar";
import SideBar from "../../Components/TruckDriver/SideBar";
import { truckDriverActiveOrder, truckDriverOpenOrders, truckDriverOrderHistory, truckDriverProfile } from "../../Store/Actions/truckDriverOrders";
import style from "./style.module.css";
import { loaderStatus } from "../../Store/Actions/ModalStatus";



const DriverDashboard = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loaderStatus(true))
    dispatch(truckDriverOpenOrders())
    dispatch(truckDriverOrderHistory())
    dispatch(truckDriverProfile())
    dispatch(truckDriverActiveOrder())
  }, []);



  return (
    <div className={style.dashboard}>
      <SideBar />
      <div className={style.body}>
        <NavBar />
        <div className={style.body__content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;
