import React, { useEffect } from "react";
import TDActiveOrderCard from "../Cards/OrderCard/ActiveOrder";
import Active from "./Active";
import style from "./ActiveOrder.module.css";
import Open from "./Open";
import OrderDetail from "./OrderDetail";
import { useDispatch, useSelector } from "react-redux";
import { OrderDetails } from "../../Store/Actions/OrderDetails";

const ActiveOrder = () => {
  const dispatch = useDispatch();
  const { activeOrder } = useSelector(state => state.truckDriverOrders);


  useEffect(() => {
    activeOrder && dispatch(OrderDetails(activeOrder))
  }, [activeOrder]);


  return (
    <div className={style.Active_OrderSection} >

      <div className={style.Active__OrderContainer}>
        <header className={style.Active__header}>
          <h5>Active Order</h5>
        </header>
        {
          activeOrder && typeof activeOrder !== "string" ? <div onClick={() => activeOrder && dispatch(OrderDetails(activeOrder))}>

            <TDActiveOrderCard activeOrder={activeOrder} />

          </div> :
            <Active />
        }
        <Open />
      </div>
      <div className={style.OrderDetails}>
        <OrderDetail />
      </div>
    </div>
  );
};

export default ActiveOrder;
