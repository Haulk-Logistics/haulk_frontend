import React, { useEffect } from "react";
import SideBar from "../../Components/CargoOwner/SideBar";
import NavBar from "../../Components/CargoOwner/NavBar";
import style from "./CargoOwnerDashboard.module.css";
import { Outlet } from "react-router-dom";
import { CargoOwnerActiveOrders, CargoOwnerDetails, cargoOwnerOrder, cargoOwnerOrderHistory } from "../../Store/Actions/cargoOwnerOrders";
import { useDispatch, useSelector } from "react-redux";
import { loaderStatus } from "../../Store/Actions/ModalStatus";



const CargoOwnerDashboard = () => {


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loaderStatus(true))
    dispatch(CargoOwnerDetails())
    dispatch(cargoOwnerOrder());
    dispatch(CargoOwnerActiveOrders())
    dispatch(cargoOwnerOrderHistory())
  }, [])

  const cargoOwner = useSelector(
    (state) => state.cargoOwnerOrders.cargoOwner
  );

  return (
    <div className={style.cargodashboard}>
      <SideBar />
      <div className={style.cargobody}>
        <NavBar props={cargoOwner && cargoOwner[0].userDetails} />
        <div className={style.Cargobody__content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CargoOwnerDashboard;
