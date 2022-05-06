import React from "react";
import OverviewCard from "../Cards/OverviewCard";
import { HiTruck } from "react-icons/hi";
import { IoMdWallet } from "react-icons/io";
import style from "./body.module.css";
import ActiveOrderCard from "../Cards/ActiveOrderCard";
import MobileOrderCards from "../Cards/MobileOrderCards";
import OrderHistory from "./OrderHistory";
import { useSelector } from "react-redux";

const DriverHome = () => {
  const { loading, profile, orderHistory, activeOrder } = useSelector((state) => state.truckDriverOrders);

  return (
    <div className={style.container}>
      <div className={style.intro}>
        <p>
          Welcome <span>{loading ? "..." : profile && profile.userDetails && profile.userDetails.firstName}</span>
        </p>
      </div>
      <div className={style.overview}>
        <div className={style.Overview__card}>
          <OverviewCard
            icon={<HiTruck size="1.5rem" />}
            color="var(--success)"
            heading="Total Trips"
            paragragh={orderHistory && orderHistory.length}
            className={style.Overview__card}
          />
        </div>
        <div className={style.Overview__card} style={{ marginRight: 0 }}>
          <OverviewCard
            icon={<IoMdWallet size="1.5rem" />}
            color="var(--accent-main)"
            heading="Wallet Balance"
            paragragh="0 "
            currency="NGN"
          />
        </div>
      </div>
      <div className={style.activecard}>
        <ActiveOrderCard />
        {activeOrder && <MobileOrderCards
          Id={activeOrder._id}
          pickupdate={activeOrder.pick_up_date}
          orderStatus={
            activeOrder.order_status === "processing" ? { color: "var( --default)", status: "Processing" } :
              activeOrder.order_status === "pending" ? { color: "var(--default)", status: "Pending" } :
                activeOrder.order_status === "accepted" ? { color: "var( --warning)", status: "Accepted" } :
                  activeOrder.order_status === "picked_up" ? { color: "var(--info-links )", status: "Picked up" } :
                    activeOrder.order_status === "in_transit" ? { color: "var(--surface-success)", status: "In Transit" } :
                      activeOrder.order_status === "dropped_off" ? { color: "var( --success)", status: "Completed" } :
                        { color: "white" }
          }
          contentTitle1="Nature of goods"
          contentTitle2="Cargo Owner Number"
          content1={activeOrder.nature_of_goods}
          content2={activeOrder.ordered_by.phoneNumber}
        />}
      </div>

      <OrderHistory />
    </div>
  );
};

export default DriverHome;
