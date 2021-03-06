import React, { useEffect } from "react";
import { FaUsers } from "react-icons/fa";
import { HiTruck } from "react-icons/hi";
import { FaMoneyBill } from "react-icons/fa";
import { FaTruckLoading } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import styles from "./AdminHome.module.css";
import AdminHeader from "../AdminHeader/AdminHeader";
import AwaitingTable from "../Tables/AwaitingTable";
import {
  AllDrivers,
  getAllCargoowners,
  getAllCompletedOrders,
  getAllDrivers,
  getAllVerifiedDrivers,
  getTotalRevenue,
} from "../../Store/Actions/Admin";
import PieChart from "./Piechart";
import EmptyActive from "../TruckDriver/EmptyActive";

const AdminHome = () => {
  const {
    unverified_drivers,
    cargoowners_num,
    drivers_num,
    revenue,
    completedOrders,
  } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDrivers());
    dispatch(getAllVerifiedDrivers());
    dispatch(getTotalRevenue())
    dispatch(AllDrivers());
    dispatch(getAllCargoowners());
    dispatch(getAllCompletedOrders());
  }, []);
  return (
    <div className={`${styles.dashboard}`}>
      <AdminHeader />
      <div className={`${styles["dashboard-main"]}`}>
        <h4>
          Welcome <span>Admin 5</span> 👋🏾
        </h4>
        <div className={`${styles["dashboard-grid"]}`}>
          <div className={styles.item}>
            <div className={styles.circle}>
              <FaUsers />
            </div>
            <div>
              <p>Total Users</p>
              <h3>{cargoowners_num && cargoowners_num.total_cargo_owners}</h3>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.circle}>
              <HiTruck />
            </div>
            <div>
              <p>Total Drivers</p>
              <h3>{drivers_num && drivers_num.total_drivers}</h3>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.circle}>
              <FaMoneyBill />
            </div>
            <div>
              <p>Revenue</p>
              <h3 style={{fontSize: "28px"}}>{revenue && revenue.total_revenue}</h3>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.circle}>
              <FaTruckLoading />
            </div>
            <div>
              <p>Total Trips</p>
              <h3>
                {completedOrders && completedOrders.total_completed_orders}
              </h3>
            </div>
          </div>
          <div className={`${styles["stat-item"]}`}>
            <p>Driver's Statistics</p>
            <div>
              <div className={`${styles["pie-chart"]}`}>
                {drivers_num ? (
                  <PieChart
                    declined={drivers_num && drivers_num.total_rejected_drivers}
                    awaiting={
                      drivers_num && drivers_num.total_unverified_drivers
                    }
                    approved={drivers_num && drivers_num.total_verified_drivers}
                  />
                ) : (
                  <EmptyActive message="No truck driver details" />
                )}
              </div>
              {drivers_num && (
                <div className={styles.legend}>
                  <ul>
                    <li>
                      <div className={styles.green}></div>
                      <p>Approved</p>
                    </li>
                    <li>
                      <div className={styles.cyan}></div>
                      <p>Declined</p>
                    </li>
                    <li>
                      <div className={styles.yellow}></div>
                      <p>Awaiting</p>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <h5>Approval Requests</h5>
        <div className={styles.requests}>
          <AwaitingTable display={false} drivers={unverified_drivers && unverified_drivers} />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
