import React, { useEffect } from "react";
import style from "./ActiveOrder.module.css";
import EmptyOpen from "./EmptyOpen";
import { useDispatch, useSelector } from "react-redux";
import { truckDriverOpenOrders } from "../../Store/Actions/truckDriverOrders";
import TDOrderCard from "../../Components/Cards/OrderCard/TDOrderCard";
import {OrderDetails} from "../../Store/Actions/OrderDetails"

const Open = () => {
  const { openOrders } = useSelector(state => state.truckDriverOrders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(truckDriverOpenOrders())
  }, []);

  const openStatus = {
    color: "var(--default)",
    status: "Open",
  };
  return (
    <div className={style.Open__0rder}>
      <header className={style.Active__header}>
        <h5>Open Order</h5>
      </header>
      <div className={style.Open__OrderCard}>
        {openOrders ? openOrders.map((order, idx) => (
          <div className={style.Active__OrderCard}>
            {" "}
            <div className={style.Active__Card} onClick={() => dispatch(OrderDetails(order))} >
              {" "}
              <TDOrderCard key={idx}  index = {idx} status={openStatus} details={order} />
            </div>
            <div className={style.Active__0rderLine}></div>
          </div>
        )) : <EmptyOpen />}
      </div>
    </div>
  );
};

export default Open;
