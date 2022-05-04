import React, {useEffect} from "react";
import Tables from "../Table/Tables";
import style from "./OrderHistory.module.css";
import { useDispatch, useSelector } from "react-redux";
import { truckDriverOrderHistory } from "../../Store/Actions/truckDriverOrders";

const OrderHistory = () => {
  const {loading , orderHistory } = useSelector(state => state.truckDriverOrders);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(truckDriverOrderHistory());
  },[])
  return (
    <div className={style.OrderHistory__container}>
        {
       ( !loading && orderHistory ) ?
       <Tables
       title="Order History"
       header={[
         "ID",
         "Date Requested",
         "Status",
         "Truck Type",
         "Arrival Date",
         "",
       ]}
       content={orderHistory && orderHistory}
     /> : <div> Loading.... </div>
      }
    </div>
  );
};

export default OrderHistory;
