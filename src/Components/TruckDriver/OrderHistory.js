import React from "react";
import Tables from "../Table/Tables";
import style from "./OrderHistory.module.css";
import { useSelector } from "react-redux";
import EmptyTable from "../Table/EmptyTable"

const OrderHistory = () => {
  const { orderHistory } = useSelector(state => state.truckDriverOrders);

  return (


    <div className={style.OrderHistory__container}>
      {
        (orderHistory && orderHistory.length !== 0) ?
          <Tables
            title="Order History"
            header={[
              "ID",
              "Date Requested",
              "Status",
              "Truck Type",
              "Drop Off",
              "",
            ]}
            content={orderHistory && orderHistory}
          /> : <div> <EmptyTable
            title="Orders"
            header="You've not made any orders yet"
            content="Your orders will be displayed here."

          /></div>
      }
    </div>

  );
};

export default OrderHistory;
