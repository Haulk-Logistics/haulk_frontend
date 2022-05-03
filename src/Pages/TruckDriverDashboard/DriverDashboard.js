import React from "react";
import { useSelector } from "react-redux";
import ActiveOrder from "../../Components/TruckDriver/ActiveOrder";
import DriverHome from "../../Components/TruckDriver/Home";
import NavBar from "../../Components/TruckDriver/NavBar";
import OrderHistory from "../../Components/TruckDriver/OrderHistory";
import SideBar from "../../Components/TruckDriver/SideBar";
import style from "./style.module.css";

const DriverDashboard = () => {
  const pageToRender = useSelector((state) => state.dashboardRender);
  console.log(pageToRender);

  return (
    <div className={style.dashboard}>
      <SideBar />
      <div className={style.body}>
        <NavBar />
        <div className={style.body__content}>
          {pageToRender === "" ? (
            <DriverHome />
          ) : pageToRender === "activeOrder" ? (
            <ActiveOrder />
          ) : (
            <OrderHistory />
          )}
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;
