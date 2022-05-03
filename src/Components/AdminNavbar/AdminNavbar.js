import React from "react";
import { Link, useNavigate, useLocation} from "react-router-dom";

import styles from "./AdminNavbar.module.css";
import adminDashboard from "../../Asset/Icons/adminDashboardIcon.svg";
import {HiViewGrid} from "react-icons/hi";
import {HiTruck} from "react-icons/hi";
import {IoLogOut} from "react-icons/io5";




const AdminNavbar = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const routeName = pathname.split("/")[1];

    return (
        <div className={styles.adminNavbar}>
            <div className = {`${styles["adminNavbar-top"]}`}>
                <div>
                    <Link to = "/">
                        <img src={adminDashboard} alt="Haulk Logo"/>
                    </Link>
                </div>
                <div className = {`${styles["navbar-tabs"]}`}>
                    <div 
                        className = {`${styles["dashboard"]} ${routeName === "admin-home" ? " blue" : null}`}
                        onClick = {() => {navigate("/admin-home")}}
                        >
                        <HiViewGrid/>
                        <p>Home</p>
                    </div>
                    <div 
                        className = {`${styles.drivers}${routeName === "admin-driver" ? " blue" : null}`}
                        onClick = {() => {navigate("/admin-driver")}}
                        >
                        <HiTruck/>
                        <p>Drivers</p>
                    </div>
                </div>
            </div>
            <div className = {`${styles["adminNavbar-bottom"]}`}>
                <div className = {`${styles["navbar-tabs"]}`}>
                <div className = {`${styles["logOut"]}`}>
                        <IoLogOut/>
                        <p>Log Out</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AdminNavbar;