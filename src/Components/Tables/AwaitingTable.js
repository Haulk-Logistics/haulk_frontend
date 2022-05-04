import React from "react";

import styles from "./AwaitingTable.module.css";


const AwaitingTable = ({ approveModal, rejectModal, drivers }) => {
    return (
        <table>
            <thead className={`${styles["pre-table"]}`}>
                <tr>
                    <td>Name</td>
                    <td>Email Address</td>
                    <td>Registered</td>
                    <td>Truck Type</td>
                    <td>Action</td>
                    <td>&nbsp;</td>
                    <td>Details</td>
                </tr>
            </thead>
            {drivers && drivers.map(({ userDetails, truckDetails }, index) => (
                <tr key={index} className={`${styles["pre-body"]}`}>
                    <td>{userDetails.firstName + " " + userDetails.lastName}</td>
                    <td>{userDetails.email}</td>
                    <td>{truckDetails.created_at.split(":")[0]}</td>
                    <td>{truckDetails.truck_type}</td>
                    <td><button className={styles.primaryBtn} onClick={() => approveModal(userDetails._id)}>Approve</button></td>
                    <td><button className={styles.secondaryBtn} onClick={rejectModal}>Reject</button></td>
                    <td className={styles.dots}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </td>
                </tr>
            ))}
        </table>
    );
}

export default AwaitingTable;