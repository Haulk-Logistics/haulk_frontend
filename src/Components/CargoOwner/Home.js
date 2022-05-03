import React from "react";
import { HiTruck } from "react-icons/hi";
import style from "./body.module.css";
import { SiSemanticweb } from "react-icons/si";
import { FaBusinessTime } from "react-icons/fa";
import OrderTable from "../Table/OrderTable";
import CargoOverviewCard from "../Cards/CargoOverview";
import { useSelector } from "react-redux";

const CargoHome = () => {
  const { loading, orders, active, pending, completed, cargoOwner } = useSelector(
    (state) => state.cargoOwnerOrders
  );

  const name = cargoOwner && cargoOwner[0].userDetails.firstName
  // const pendings = orders && orders.filter(x => x.order_status != "dropped_off")
  // console.log(pendings)


  const capitalizeFirstLetter = (string) => {
    const firstletter = string.slice(0, 1);
    const newWord = firstletter.toUpperCase() + string.slice(1)
    return newWord

  }

  const firstName = name && capitalizeFirstLetter(name)

  return (
    <div className={style.Cargocontainer}>
      <div className={style.Cargointro}>
        <p>
          Welcome <span>{firstName} </span>
        </p>
      </div>
      <div className={style.CargoOverview}>
        <div className={style.CargoOverview__card}>
          <CargoOverviewCard
            icon={<HiTruck size="1.5rem" />}
            color="var(--info-links)"
            heading="Active Orders"
            paragragh={(active && active.length > 0) ? active.length : 0}
            className={style.Overview__card}
          />
        </div>
        <div className={style.CargoOverview__card}>
          <CargoOverviewCard
            icon={<SiSemanticweb size="1.5rem" />}
            color="var(--success)"
            heading="Completed Orders"
            paragragh={(completed && completed.length > 0) ? completed.length : 0}
          />
        </div>
        <div className={style.CargoOverview__card} style={{ marginRight: 0 }}>
          <CargoOverviewCard
            icon={<FaBusinessTime size="1.5rem" />}
            color="var(--error)"
            heading="Pending Orders"
            paragragh={(pending && pending.length > 0) ? pending.length : 0}
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
