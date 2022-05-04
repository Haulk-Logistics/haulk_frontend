import axios from "axios";
import React, { useEffect, useState } from "react";
import OrderCard from "../Cards/OrderCard";
import style from "./ActiveOrder.module.css";
import EmptyActive from "./EmptyActive";

const Active = () => {

  const [orderDetail, setOrderDetail] = useState()

  const orderStatus = {
    color: "var(--surface-highlight)",
    status: "Active",
  };

  const orderDetails = {
    Id: "887799",
    pickupDate: "23 Apr",
    dropoffDate: "25 Apr",
    pickupLocation: "831 Heather Parkway, Enugu.",
    dropoffLocation: "Nigerian Port, Port-Harcourt",
  };

  const token = JSON.parse(localStorage.getItem("haulk-app-auth"))

  useEffect(() => {
    const getActiveOrders = async () => {
      await axios({
        url: "https://haulk.herokuapp.com/api/cargoowner/active_orders",
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((result) => {
        setOrderDetail(result.data)
        console.log(result)
      }).catch((error) => {
        console.log(error)
      })
    }

    getActiveOrders()
  }, [token])

  // <div className={style.Active__OrderCard}>
  //   {" "}
  //   <div className={style.Active__Card}>
  //     {" "}
  //     <OrderCard status={orderStatus} details={orderDetails} />
  //   </div>
  //   <div className={style.Active__0rderLine}></div>
  // </div>;

  return orderDetail && (
    <div className={style.Active__0rder}>
      <header className={style.Active__header}>
        <h5>Orders</h5>
      </header>

      { /*orderDetail.message.length === 0 ? <div className={style.Active__OrderCard}>   <EmptyActive /></div> : */}

      <div className={style.Active__OrderCard}>
        <div className={style.Active__Card}>
          <OrderCard status={orderStatus} details={orderDetails} />
        </div>
        <div className={style.Active__0rderLine}></div>
      </div>


    </div>

  );
};

export default Active;


