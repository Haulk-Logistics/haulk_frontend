import React from "react";
import Tables from "../Table/Tables";
import style from "./OrderHistory.module.css";
import { useSelector } from "react-redux";
import EmptyTable from "../Table/EmptyTable"
import padloc from "../../Asset/Images/Padloc.svg"
import styles from "./body.module.css";

const OrderHistory = () => {
  const { orderHistory, profile } = useSelector(state => state.truckDriverOrders);

  return (


    <div className={style.OrderHistory__container}>
      {profile && profile.accepted === "verified" ?
        <div>
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
        </div> : <div className={styles.notVerified__container} style={{ width: "100%" }}>
          <div className={styles.notverified__padlock}>
            <img src={padloc} alt="Pad Lock" />
          </div>
          <div className={styles.notverified__content}>
            <h5> Your account has not been verified </h5>
            <p> Kindly wait while we verify your documents. Check back often.</p>
          </div>
        </div>}
    </div>

  );
};

export default OrderHistory;
