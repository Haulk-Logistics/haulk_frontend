import React from "react";
import OrderCard from "../Cards/OrderCard";
import style from "./ActiveOrder.module.css";

const Open = () => {
  const openStatus = {
    color: "var(--default)",
    status: "Open",
  };

  const openOrders = [
    {
      Id: "887799",
      pickupDate: "23 Apr",
      dropoffDate: "25 Apr",
      pickupLocation: "831 Heather Parkway, Enugu.",
      dropoffLocation: "Nigerian Port, Port-Harcourt",
    },

    {
      Id: "887799",
      pickupDate: "23 Apr",
      dropoffDate: "25 Apr",
      pickupLocation: "831 Heather Parkway, Enugu.",
      dropoffLocation: "Nigerian Port, Port-Harcourt",
    },

    {
      Id: "887799",
      pickupDate: "23 Apr",
      dropoffDate: "25 Apr",
      pickupLocation: "831 Heather Parkway, Enugu.",
      dropoffLocation: "Nigerian Port, Port-Harcourt",
    },

    {
      Id: "887799",
      pickupDate: "23 Apr",
      dropoffDate: "25 Apr",
      pickupLocation: "831 Heather Parkway, Enugu.",
      dropoffLocation: "Nigerian Port, Port-Harcourt",
    },
  ];

  return (
    <div className={style.Open__0rder}>
      <header className={style.Active__header}>
        <h5>Open Order</h5>
      </header>
      <div className={style.Open__OrderCard}>
        {openOrders.map((order, idx) => (
          <div className={style.Active__OrderCard}>
            {" "}
            <div className={style.Active__Card}>
              {" "}
              <OrderCard status={openStatus} details={order} />
            </div>
            <div className={style.Active__0rderLine}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Open;
