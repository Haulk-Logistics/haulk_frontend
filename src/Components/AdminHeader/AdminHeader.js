import React from "react";

import styles from "./AdminHeader.module.css";
import haulkLogo from "../../Asset/logo/haulkLogo.png";

const AdminHeader = () => {
  return (
    <div className={`${styles["dashboard-header"]} container`}>
        <div>
            <div className={`${styles["dashboard-header-img"]}`}>
                <img src={haulkLogo} alt="Admin Avatar" />
            </div>
            <div className={`${styles["dashboard-header-text"]}`}>
                <p>Nweze Chidera</p>
                <p>Admin</p>
            </div>
        </div>
    </div>
  );
};

export default AdminHeader;
