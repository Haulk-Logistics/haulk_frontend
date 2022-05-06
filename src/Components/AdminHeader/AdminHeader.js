import React from "react";

import styles from "./AdminHeader.module.css";
import adminImg from "../../Asset/Images/adminImage.webp";

const AdminHeader = () => {
  return (
    <div className={`${styles["dashboard-header"]} container`}>
        <div>
            <div>
                <img src={adminImg} alt="Admin Avatar" />
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
