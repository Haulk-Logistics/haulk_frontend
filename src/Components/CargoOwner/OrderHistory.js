import React from "react";
import Tables from "../Table/Tables";
import style from "./OrderHistory.module.css";
import { useSelector } from "react-redux";
import EmptyTable from "../Table/EmptyTable";

const CargoOrderHistory = () => {
  const { orderHistory } = useSelector(
    (state) => state.cargoOwnerOrders
  );


  return orderHistory && (
    <div className={style.OrderHistory__container}>
      {
        orderHistory !== "You do not have any order history" ?
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
          /> :
          <EmptyTable
            title="Order History"
            header="You've not made any orders yet"
            content="Your Order history will be displayed here."
          />
      }
    </div>
  );
};

export default CargoOrderHistory;
