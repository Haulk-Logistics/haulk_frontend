import React from "react";
import EmptyActive from "../TruckDriver/EmptyActive";
import styles from "./AwaitingTable.module.css";
import { useDispatch } from "react-redux";
import { rejectDriver, setDriverId } from "../../Store/Actions/Admin";
import { useNavigate } from "react-router-dom";

const AwaitingTable = ({ approveModal, display, rejectModal, drivers }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accepted = (id) => {
    approveModal(true);
    dispatch(setDriverId(id));
  };

  const rejected = (id) => {
    rejectModal(true);
    dispatch(setDriverId(id));
  };
  return drivers && drivers.length !== 0 ? (
    <table>
      <thead className={`${styles["pre-table"]}`}>
        <tr>
          <td>Name</td>
          <td>Email Address</td>
          <td>Registered</td>
          <td>Truck Type</td>
          {display && <td>Action</td>}
          {display &&  <td>&nbsp;</td> }
          <td>Details</td>
        </tr>
      </thead>
      {drivers &&
        drivers.map(({ userDetails, truckDetails, _id }, index) => (
          <tr key={index} className={`${styles["pre-body"]}`}>
            <td>{userDetails.firstName + " " + userDetails.lastName}</td>
            <td>{userDetails.email}</td>
            <td>{truckDetails.created_at.split(":")[0]}</td>
            <td>{truckDetails.truck_type}</td>
            {display && (
              <td>
                <button
                  className={styles.primaryBtn}
                  onClick={() => accepted(_id)}
                >
                  Approve
                </button>
              </td>
            )}
            {display && (
              <td>
                <button
                  className={styles.secondaryBtn}
                  onClick={() => rejected(_id)}
                >
                  Reject
                </button>
              </td>
            )}
            <td
              onClick={() => navigate(`/admin-driver/${_id}`)}
              className={styles.dots}
            >
              <div></div>
              <div></div>
              <div></div>
            </td>
          </tr>
        ))}
    </table>
  ) : (
    <EmptyActive message="No drivers waiting verification" />
  );
};

export default AwaitingTable;
