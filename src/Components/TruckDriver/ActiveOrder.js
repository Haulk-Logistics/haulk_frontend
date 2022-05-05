import React, { useEffect } from "react";
import TDActiveOrderCard from "../Cards/OrderCard/ActiveOrder";
import Active from "./Active";
import style from "./ActiveOrder.module.css";
import Open from "./Open";
import OrderDetail from "./OrderDetail";
import { useDispatch, useSelector } from "react-redux";
import { truckDriverActiveOrder } from "../../Store/Actions/truckDriverOrders";
import { OrderDetails } from "../../Store/Actions/OrderDetails";

const ActiveOrder = () => {
  const dispatch = useDispatch();
  const { activeOrder } = useSelector(state => state.truckDriverOrders);

console.log(activeOrder,"hey")

  useEffect(() => {
    dispatch(truckDriverActiveOrder());
    dispatch(OrderDetails(activeOrder))
  }, []);


  return (
    <div className={style.Active_OrderSection} >
      <div className={style.Active__OrderContainer}>
        {
          activeOrder && typeof activeOrder !== "string" ? <div onClick={() => dispatch(OrderDetails(activeOrder))}> 
           
            <TDActiveOrderCard activeOrder={activeOrder} />
            
          </div>:
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
