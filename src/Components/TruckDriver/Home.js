import React from "react";
import OverviewCard from "../Cards/OverviewCard";
import { HiTruck } from "react-icons/hi";
import { IoMdWallet } from "react-icons/io";
import style from "./body.module.css";
import ActiveOrderCard from "../Cards/ActiveOrderCard";
import Tables from "../Table/Tables";

const DriverHome = () => {
  return (
    <div className={style.container}>
      <div className={style.intro}>
        <p>
          Welcome <span>Chidera</span>
        </p>
      </div>
      <div className={style.overview}>
        <OverviewCard
          icon={<HiTruck size="1.5rem" />}
          color="var(--success)"
          heading="Total Trips"
          paragragh="10"
        />

        <OverviewCard
          icon={<IoMdWallet size="1.5rem" />}
          color="var(--accent-main)"
          heading="Wallet Balance"
          paragragh="100, 000 "
          currency="NGN"
        />
      </div>
      <div className={style.activecard}>
        <ActiveOrderCard />
      </div>
      <div className={style.orderhistory}>
        <Tables
          title="Orders History"
          header={[
            "ID",
            "Date Requested",
            "Status",
            "Drop Location",
            "Arrival Date",
          ]}
          content={[
            ["814567", "23 Apr 2022", "Complete", "Lagos port", "26 Apr 2022"],
            ["814567", "23 Apr 2022", "Complete", "Lagos port", "26 Apr 2022"],
          ]}
        />
      </div>
    </div>
  );
};

export default DriverHome;
