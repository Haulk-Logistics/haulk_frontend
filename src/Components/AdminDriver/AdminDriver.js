import React, { useState, useEffect } from "react";
import styles from "./AdminDriver.module.css";
import AdminHeader from "../AdminHeader/AdminHeader";
import AwaitingTable from "../Tables/AwaitingTable";
import ApprovedTable from "../Tables/ApprovedTable";
import DriverDetail from "../DriverDetail/DriverDetail";
import AcceptModal from "../Modal/AcceptModal";
import RejectModal from "../Modal/RejectModal";
import DeleteModal from "../Modal/DeleteModal";
import { useDispatch, useSelector } from "react-redux";
import {
  acceptDriver,
  getAllDrivers,
  getAllVerifiedDrivers,
} from "../../Store/Actions/Admin";
import { toast } from "react-toastify";

const AdminDriver = () => {
  const {
    unverified_drivers,
    verified_drivers,
    loading,
  } = useSelector((state) => state.admin);
  console.log(unverified_drivers, "vcccxc");
  const dispatch = useDispatch();
  const [details, setDetails] = useState(true)
  const [click, setClick] = useState(true);
  const [approve, setApprove] = useState(false);
  const [reject, setReject] = useState(false);
  const [remove, setRemove] = useState(false);
  const [user_id, setUserId] = useState("");

  useEffect(() => {
    dispatch(getAllDrivers());
    dispatch(getAllVerifiedDrivers());
  }, []);

  console.log(verified_drivers, "...............");
  const awaitingTab = () => {
    setClick(true);
  };
  const approvedTab = () => {
    setClick(false);
  };
  console.log(unverified_drivers, "vdbgrfhghd");

  const removeModal = () => {
    setRemove(true);
  };

  const hideDetails = () => {
    setDetails(!details)
  }

  return (
    <>
      <div className={styles.dashboard}>
        <AdminHeader />
        {!details && <div className={`${styles["dashboard-main"]}`}>
          <h4>Manage Drivers</h4>
          <div className={styles.approvals}>
            <button
              onClick={awaitingTab}
              className={`${click ? "addBorder" : "removeBorder"}`}
            >
              Awaiting Approval (
              {unverified_drivers ? unverified_drivers.length : "0"})
            </button>
            <button
              onClick={approvedTab}
              className={!click ? "addBorder" : "removeBorder"}
            >
              Approved ({verified_drivers ? verified_drivers.length : "0"})
            </button>
          </div>
          <div className={styles.table}>
            {click && (
              <AwaitingTable
                approve={approve}
                acceptDriver={acceptDriver}
                drivers={unverified_drivers && unverified_drivers}
                approveModal={setApprove}
                rejectModal={setReject}
              />
            )}
            {!click && (
              <ApprovedTable
                drivers={verified_drivers && verified_drivers}
                deleteModal={removeModal}
              />
            )}
          </div>
        </div>}
        {details && <DriverDetail hideDetails = {hideDetails}/>}
      </div>
      {approve && (
        <AcceptModal  closeModal={() => setApprove(false)} />
      )}
      {reject && <RejectModal closeModal={() => setReject(false)} />}
      {remove && <DeleteModal closeModal={() => setRemove(false)} />}
    </>
  );
};

export default AdminDriver;
