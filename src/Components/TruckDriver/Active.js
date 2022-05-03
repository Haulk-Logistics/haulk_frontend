import React from "react";
import OrderCard from "../Cards/OrderCard";
import style from "./ActiveOrder.module.css";
import EmptyActive from "./EmptyActive";

const Active = () => {
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

  // <div className={style.Active__OrderCard}>
  //   {" "}
  //   <div className={style.Active__Card}>
  //     {" "}
  //     <OrderCard status={orderStatus} details={orderDetails} />
  //   </div>
  //   <div className={style.Active__0rderLine}></div>
  // </div>;

  return (
    <div className={style.Active__0rder}>
      <header className={style.Active__header}>
        <h5>Active Order</h5>
      </header>
      <div className={style.Active__OrderCard}>
        <EmptyActive />
      </div>
    </div>
  );
};

export default Active;
