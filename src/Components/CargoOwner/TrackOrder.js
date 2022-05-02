import React from "react";
import style from "./ActiveOrder.module.css";
import Open from "./Open";
import OrderDetail from "./OrderDetail";

const TrackOrder = () => {
  return (
    <div className={style.Active_OrderSection}>
      <div className={style.Active__OrderContainer}>
        <Open />
      </div>
      <div className={style.OrderDetails}>
        <OrderDetail />
      </div>
    </div>
  );
};

export default TrackOrder;
