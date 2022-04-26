import React from "react";
import { Link } from "react-router-dom";

import styles from "./AdminNavbar.module.css";
import adminDashboard from "../../Asset/Icons/adminDashboardIcon.svg";
import {HiViewGrid} from "react-icons/hi";
import {HiTruck} from "react-icons/hi";
import {IoLogOut} from "react-icons/io5";




const AdminNavbar = () => {
    return (
        <div className={styles.adminNavbar}>
            <div className = {`${styles["adminNavbar-top"]}`}>
                <div>
                    <Link to = "/">
                        <img src={adminDashboard} alt="Haulk Logo"/>
                    </Link>
                </div>
                <div className = {`${styles["navbar-tabs"]}`}>
                    <div className = {styles.dashboard}>
                    <HiViewGrid/>
                    <p>Home</p>
                    </div>
                    <div className = {styles.drivers}>
                        <HiTruck/>
                        <p>Drivers</p>
                    </div>
                </div>
            </div>
            <div className = {`${styles["adminNavbar-bottom"]}`}>
                <div className = {`${styles["navbar-tabs"]}`}>
                    <div className = {styles.logOut}>
                        <IoLogOut/>
                        <p>Log Out</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AdminNavbar;