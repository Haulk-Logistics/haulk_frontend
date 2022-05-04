import React, { useState, useEffect } from "react";
import style from "./ActiveOrder.module.css";
import EmptyOpen from "./EmptyOpen";
import { useDispatch, useSelector } from "react-redux";
import { getOneOpenOrder, truckDriverOpenOrders } from "../../Store/Actions/truckDriverOrders";
import TDOrderCard from "../../Components/Cards/OrderCard/TDOrderCard";

const Open = () => {
  const { openOrders, loading } = useSelector(state => state.truckDriverOrders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(truckDriverOpenOrders())
  }, [])



  console.log(openOrders);
  const openStatus = {
    color: "var(--default)",
    status: "Open",
  };

  const setOrder =  (id) => {
    console.log(id, "identity")
    dispatch(getOneOpenOrder(openOrders && openOrders[id]._id))
  }

  return (
    <div className={style.Open__0rder}>
      <header className={style.Active__header}>
        <h5>Open Order</h5>
      </header>
      <div className={style.Open__OrderCard}>
        {openOrders ? openOrders.map((order, idx) => (
          <div className={style.Active__OrderCard}>
            {" "}
            <div className={style.Active__Card}>
              {" "}
              <TDOrderCard key={idx} click = { () => setOrder(idx) } index = {idx} status={openStatus} details={order} />
            </div>
            <div className={style.Active__0rderLine}></div>
          </div>
        )) : <EmptyOpen />}
      </div>
    </div>
  );
};

export default Open;
