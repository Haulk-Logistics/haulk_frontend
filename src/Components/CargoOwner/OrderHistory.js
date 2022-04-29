import React from "react";
import Tables from "../Table/Tables";
import style from "./OrderHistory.module.css";

const CargoOrderHistory = () => {
  return (
    <div className={style.OrderHistory__container}>
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
        content={[
          {
            _id: "62693b",
            ordered_by: "62692533fe60f9512b62a8c8",
            transaction_ref: "paypending",
            truck_driver: null,
            nature_of_goods: "big",
            truck_type: "flatbed",
            drop_off_location: "enugu",
            pick_off_location: "lagos",
            pick_up_date: "23 march 2022",
            container_size: "23",
            container_number: "234",
            shipping_line: "23",
            proof_url:
              "http://res.cloudinary.com/haulk-logistics/image/upload/v1651063351/Driver/lke08aarbidafyy7zwne.jpg",
            ordered_at: "2022-04-27T12:41:24.082Z",
            order_status: "processing",
            __v: 0,
          },
          {
            _id: "62693d",
            ordered_by: "62692533fe60f9512b62a8c8",
            transaction_ref: "paypending",
            truck_driver: null,
            nature_of_goods: "big",
            truck_type: "flatbed",
            drop_off_location: "enugu",
            pick_off_location: "lagos",
            pick_up_date: "23 march 2022",
            container_size: "23",
            container_number: "234",
            shipping_line: "23",
            proof_url:
              "http://res.cloudinary.com/haulk-logistics/image/upload/v1651063853/Driver/zpjohhodylkehsjym6jx.jpg",
            ordered_at: "2022-04-27T12:41:24.082Z",
            order_status: "processing",
            __v: 0,
          },
        ]}
      />
    </div>
  );
};

export default CargoOrderHistory;
