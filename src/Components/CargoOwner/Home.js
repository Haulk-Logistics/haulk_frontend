import React from "react";
import OverviewCard from "../Cards/OverviewCard";
import { HiTruck } from "react-icons/hi";
import { IoMdWallet } from "react-icons/io";
import style from "./body.module.css";
import ActiveOrderCard from "../Cards/ActiveOrderCard";
import Tables from "../Table/Tables";
import MobileOrderCards from "../Cards/MobileOrderCards";
import OrderHistory from "./OrderHistory";

const DriverHome = () => {
  return (
    <div className={style.container}>
      <div className={style.intro}>
        <p>
          Welcome <span>Chidera</span>
        </p>
      </div>
      <div className={style.overview}>
        <div className={style.Overview__card}>
          <OverviewCard
            icon={<HiTruck size="1.5rem" />}
            color="var(--success)"
            heading="Total Trips"
            paragragh="10"
            className={style.Overview__card}
          />
        </div>
        <div className={style.Overview__card} style={{ marginRight: 0 }}>
          <OverviewCard
            icon={<IoMdWallet size="1.5rem" />}
            color="var(--accent-main)"
            heading="Wallet Balance"
            paragragh="100, 000 "
            currency="NGN"
          />
        </div>
      </div>
      <div className={style.activecard}>
        <ActiveOrderCard />
        <MobileOrderCards
          Id="8164695"
          pickupdate=" 23 Apr"
          orderStatus="In Transit"
          contentTitle1="Nature of goods"
          contentTitle2="Cargo Owner Number"
          content1="Consignment"
          content2="0903 354 6898"
        />
      </div>

      <OrderHistory />
    </div>
  );
};

export default DriverHome;
