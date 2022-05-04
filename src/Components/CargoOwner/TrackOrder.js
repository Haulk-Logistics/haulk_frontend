import React from "react";
import { useSelector } from "react-redux";
import style from "./ActiveOrder.module.css";
import Open from "./Open";
import OrderDetail from "./OrderDetail"
import OrderEmptyState from "./OrderEmptyState";


const TrackOrder = () => {
  const orderDetail = useSelector((state) => state.cargoOwnerOrders.orders)

  return orderDetail && (
    <div >
      {orderDetail.length !== 0 ?
        <div className={style.Active_OrderSection}>
          <div className={style.Active__OrderContainer}>
            <Open />
          </div>
          <div className={style.OrderDetails}>
            <OrderDetail />
          </div></div> : <OrderEmptyState />}
    </div>
  );
};

export default TrackOrder;
