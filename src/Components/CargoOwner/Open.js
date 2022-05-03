import React from "react";
import OrderCard from "../Cards/OrderCard";
import style from "./ActiveOrder.module.css";
import EmptyActive from "./EmptyActive";
import { useDispatch, useSelector } from 'react-redux'
import { OrderDetails } from "../../Store/Actions/OrderDetails";
import { orderModalStatus } from "../../Store/Actions/ModalStatus"

const Open = () => {
  const orderDetail = useSelector((state) => state.cargoOwnerOrders.orders)
  const dispatch = useDispatch()



  return orderDetail && (
    <div className={style.cargoOpen__0rder}>
      <header className={style.Active__header}>
        <h5>Orders</h5>
      </header>
      <div className={style.cargoOpen__OrderCard}>
        {orderDetail.length !== 0 ? orderDetail.map((order, idx) => (
          <div className={style.Active__OrderCard} onClick={() => { dispatch(OrderDetails(order)); dispatch(orderModalStatus({ status: true })); }}>
            {" "}
            <div className={style.Active__Card}>
              {" "}
              <OrderCard
                status={
                  order.order_status === "processing" ? { color: "var(--default)", status: "Processing" } :
                    order.order_status === "pending" ? { color: "var(--default)", status: "Pending" } :
                      order.order_status === "accepted" ? { color: "var( --warning)", status: "Accepted" } :
                        order.order_status === "picked_up" ? { color: "var(--info-links )", status: "Picked up" } :
                          order.order_status === "in_transit" ? { color: "var(--surface-success)", status: "In Transit" } :
                            order.order_status === "dropped_off" ? { color: "var( --success)", status: "Completed" } :
                              { color: "white" }
                }
                details={order} />
            </div>
            <div className={style.Active__0rderLine}></div>
          </div>
        )) : <div className={style.Active__OrderCard}>   <EmptyActive /></div>}
      </div>
    </div>
  );
};

export default Open;
