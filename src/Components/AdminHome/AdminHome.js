import React from "react";
import {FaUsers} from "react-icons/fa";
import {HiTruck} from "react-icons/hi";
import {FaMoneyBill} from "react-icons/fa";
import {FaTruckLoading} from "react-icons/fa"

import styles from "./AdminHome.module.css";
import AdminHeader from "../AdminHeader/AdminHeader";
import AwaitingTable from "../Tables/AwaitingTable";

const AdminHome = () => {
  return (
    <div className={`${styles.dashboard}`}>
      <AdminHeader/>
      <div className={`${styles["dashboard-main"]}`}>
        <h4>
          Welcome <span>Admin 5</span> 👋🏾
        </h4>
        <div className={`${styles["dashboard-grid"]}`}>
          <div className={styles.item}>
            <div className={styles.circle}>
                <FaUsers/>
            </div>
            <div>
              <p>Total Users</p>
              <h3>15</h3>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.circle}>
                <HiTruck/>
            </div>
            <div>
              <p>Total Drivers</p>
              <h3>15</h3>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.circle}>
                <FaMoneyBill/>
            </div>
            <div>
              <p>Total Revenue</p>
              <h3>5</h3>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.circle}>
                <FaTruckLoading/>
            </div>
            <div>
              <p>Total Trips</p>
              <h3>10</h3>
            </div>
          </div>
          <div className={`${styles["stat-item"]}`}>
              <p>Driver's Statistics</p>
              <div>
                <div 
                  className = {`${styles["pie-chart"]}`}
                >
                  {/* The Data that would be rendered as a pie chart would go in here. The circle here is a placeholder */}
                </div>
                <div className = {styles.legend}>
                  <ul>
                    <li>
                      <div className = {styles.green}></div>
                      <p>Approved</p>
                    </li>
                    <li>
                      <div className = {styles.cyan}></div>
                      <p>Declined</p>
                    </li>
                    <li>
                      <div className = {styles.yellow}></div>
                      <p>Awaiting Approval</p>
                    </li>
                  </ul>
                </div>
              </div>
          </div>
        </div>
        <h5>Approval Request</h5>
        <div className = {styles.requests}>
          <AwaitingTable/>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
