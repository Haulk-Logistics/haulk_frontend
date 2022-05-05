import React from "react";
import EmptyActive from "../TruckDriver/EmptyActive";
import styles from "./ApprovedTable.module.css";

const ApprovedTable = ({ drivers, deleteModal }) => {
  return (drivers && drivers.length !== 0 ) ? (
    <table>
      <thead className={`${styles["post-table"]}`}>
        <tr>
          <td>Name</td>
          <td>Email Address</td>
          <td>Registered</td>
          <td>Truck Type</td>
          <td>Action</td>
          <td>Details</td>
        </tr>
      </thead>
      {drivers &&
        drivers.map(({ userDetails, truckDetails }, index) => (
          <tr key={index} className={`${styles["post-body"]}`}>
            <td>{userDetails.firstName + " " + userDetails.lastName}</td>
            <td>{userDetails.email}</td>
            <td>{truckDetails.created_at.split(":")[0]}</td>
            <td>{truckDetails.truck_type}</td>
            <td>
              <button
                className={styles.deleteBtn}
                onClick={() => deleteModal(userDetails._id)}
              >
                Delete
              </button>
            </td>
            <td className={styles.dots}>
              <div></div>
              <div></div>
              <div></div>
            </td>
          </tr>
        ))}
    </table>
  ) : (
    <EmptyActive message="No Verified Drivers" />
  );
};

export default ApprovedTable;
