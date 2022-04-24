import React from "react";
import DriverHome from "../../Components/TruckDriver/Home";
import NavBar from "../../Components/TruckDriver/NavBar";
import SideBar from "../../Components/TruckDriver/SideBar";
import style from "./style.module.css";

const DriverDashboard = () => {
  return (
    <div className={style.dashboard}>
      <SideBar />
      <div className={style.body}>
        <NavBar />
        <DriverHome />
      </div>
    </div>
  );
};

export default DriverDashboard;
