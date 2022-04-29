import React from "react";
import OverviewCard from "../Cards/OverviewCard";
import { HiTruck } from "react-icons/hi";
import style from "./body.module.css";
import { SiSemanticweb } from "react-icons/si";
import { FaBusinessTime } from "react-icons/fa";
import OrderTable from "../Table/OrderTable";
import CargoOverviewCard from "../Cards/CargoOverview";

const CargoHome = () => {
  return (
    <div className={style.Cargocontainer}>
      <div className={style.Cargointro}>
        <p>
          Welcome <span>Chidera</span>
        </p>
      </div>
      <div className={style.CargoOverview}>
        <div className={style.CargoOverview__card}>
          <CargoOverviewCard
            icon={<HiTruck size="1.5rem" />}
            color="var(--info-links)"
            heading="Active Orders"
            paragragh="10"
            className={style.Overview__card}
          />
        </div>
        <div className={style.CargoOverview__card}>
          <CargoOverviewCard
            icon={<SiSemanticweb size="1.5rem" />}
            color="var(--success)"
            heading="Completed Orders"
            paragragh="10"
          />
        </div>
        <div className={style.CargoOverview__card} style={{ marginRight: 0 }}>
          <CargoOverviewCard
            icon={<FaBusinessTime size="1.5rem" />}
            color="var(--error)"
            heading="Pending Orders"
            paragragh="12"
          />
        </div>
      </div>
      <div className={style.CargoHome__Table}>
        <OrderTable
          title="Orders"
          header={["ID", "Date Requested", "Status", "Truck Type"]}
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
    </div>
  );
};

export default CargoHome;
