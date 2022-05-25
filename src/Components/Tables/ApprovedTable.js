import React from "react";
import EmptyActive from "../TruckDriver/EmptyActive";
import styles from "./ApprovedTable.module.css";
import { useNavigate } from 'react-router-dom';

const ApprovedTable = ({ drivers }) => {
  const navigate = useNavigate();
  return (drivers && drivers.length !== 0 ) ? (
    <table className = {styles.approvedTable}>
      <thead className={`${styles["post-table"]}`}>
        <tr>
          <td>Name</td>
          <td>Email Address</td>
          <td>Registered</td>
          <td>Truck Type</td>
          <td>Details</td>
        </tr>
      </thead>
      {drivers &&
        drivers.map(({ userDetails, truckDetails, _id }, index) => (
          <tr key={index} className={`${styles["post-body"]}`}>
            <td>{userDetails.firstName + " " + userDetails.lastName}</td>
            <td>{userDetails.email}</td>
            <td>{truckDetails.created_at.split("T")[0]}</td>
            <td>{truckDetails.truck_type.charAt(0).toUpperCase() + truckDetails.truck_type.slice(1)}</td>
            <td className={styles.dots} onClick={() => navigate(`/admin-driver/${_id}`)}>
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
