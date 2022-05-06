import React from "react";
import style from "./ActiveOrder.module.css";
import EmptyOpen from "./EmptyOpen";
import { useDispatch, useSelector } from "react-redux";
import TDOrderCard from "../../Components/Cards/OrderCard/TDOrderCard";
import { OrderDetails } from "../../Store/Actions/OrderDetails"
import { orderModalStatus } from "../../Store/Actions/ModalStatus";



const Open = () => {

  const { openOrders } = useSelector(state => state.truckDriverOrders);

  const dispatch = useDispatch();

  const openStatus = {
    color: "var(--default)",
    status: "Open",
  };

  return openOrders && (
    <div className={style.Open__0rder}>
      <header className={style.Active__header}>
        <h5>Open Order</h5>
      </header>
      <div className={style.Open__OrderCard}>
        {openOrders.length !== 0 ? openOrders.map((order, idx) => (
          <div className={style.Active__OrderCard}>
            {" "}
            <div className={style.Active__Card} onClick={() => { dispatch(OrderDetails(order)); dispatch(orderModalStatus({ status: true })) }} >
              {" "}
              <TDOrderCard key={idx} status={openStatus} index={idx} details={order} />
            </div>
            <div className={style.Active__0rderLine}></div>
          </div>
        )) : <EmptyOpen />}
      </div>
    </div>
  );
};

export default Open;
