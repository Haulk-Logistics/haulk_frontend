import React, { useEffect, useState } from "react";
import OverviewCard from "../Cards/OverviewCard";
import { HiTruck } from "react-icons/hi";
import style from "./body.module.css";
import { SiSemanticweb } from "react-icons/si";
import { FaBusinessTime } from "react-icons/fa";
import OrderTable from "../Table/OrderTable";
import CargoOverviewCard from "../Cards/CargoOverview";
import { useDispatch, useSelector } from "react-redux";
import { cargoOwnerOrder } from "../../Store/Actions/cargoOwnerOrders";

const CargoHome = () => {
  const dispatch = useDispatch();
  const { loading, orders, error, active, pending, completed } = useSelector(
    (state) => state.cargoOwnerOrders
  );
  // const pendings = orders && orders.filter(x => x.order_status != "dropped_off")
  // console.log(pendings)
  console.log( active, orders);
  useEffect(() => {
    dispatch(cargoOwnerOrder());
  }, []);


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
            paragragh = {(active && active.length > 0) ? active.length : 0 }
            className={style.Overview__card}
          />
        </div>
        <div className={style.CargoOverview__card}>
          <CargoOverviewCard
            icon={<SiSemanticweb size="1.5rem" />}
            color="var(--success)"
            heading="Completed Orders"
            paragragh={(completed && completed.length > 0) ? completed.length : 0 }
          />
        </div>
        <div className={style.CargoOverview__card} style={{ marginRight: 0 }}>
          <CargoOverviewCard
            icon={<FaBusinessTime size="1.5rem" />}
            color="var(--error)"
            heading="Pending Orders"
            paragragh={(pending && pending.length > 0) ? pending.length : 0 }
          />
        </div>
      </div>
      <div className={style.CargoHome__Table}>
        {orders && !loading ? (
          <OrderTable
            title="Orders"
            header={["ID", "Date Requested", "Status", "Truck Type"]}
            content={orders && orders}
          />
        ) : (
          <div> Loading... </div>
        )}
      </div>
    </div>
  );
};

export default CargoHome;
