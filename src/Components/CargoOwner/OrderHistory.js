import React from "react";
import Tables from "../Table/Tables";
import style from "./OrderHistory.module.css";
import { useSelector } from "react-redux";

const CargoOrderHistory = () => {
  const { loading, orderHistory } = useSelector(
    (state) => state.cargoOwnerOrders
  );


  return (
    <div className={style.OrderHistory__container}>
      {
        (!loading && orderHistory) ?
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

export default CargoOrderHistory;
