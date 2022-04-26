import React, {useState} from "react";

import AdminHeader from '../AdminHeader/AdminHeader';
import AwaitingTable from "../Tables/AwaitingTable";
import styles from "./AdminDriver.module.css";

const AdminDriver = () => {
    const [click, setClick] = useState(true);
    const switchTab = () => {
        setClick(false)
    }

    return (
        <div className = {styles.dashboard}>
            <AdminHeader/>
            <div className = {`${styles["dashboard-main"]}`}>
                <h4>Manage Drivers</h4>
                <div className = {styles.approvals}>
                    <button>Awaiting Approval (2)</button>
                    <button onClick = {switchTab}>Approved</button>
                </div>
                <div className = {styles.table}>
                    {click && <AwaitingTable/>}
                </div>
            </div>
        </div>
    );
}
 
export default AdminDriver;