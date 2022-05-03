import React, { useState } from "react";


import styles from "./AdminDriver.module.css";
import AdminHeader from "../AdminHeader/AdminHeader";
import AwaitingTable from "../Tables/AwaitingTable";
import ApprovedTable from "../Tables/ApprovedTable";
import AcceptModal from "../Modal/AcceptModal";
import RejectModal from "../Modal/RejectModal";

const AdminDriver = () => {
  const [click, setClick] = useState(true);
  const [approve, setApprove] = useState(false);
  const [reject, setReject] = useState(false);

  const awaitingTab = () => {
    setClick(true);
  };
  const approvedTab = () => {
    setClick(false);
  };

  const acceptModal = () => {
    setApprove(true)
  };

  const rejectModal = () => {
    setReject(true)
  }

  return (
    <>
      {!approve && <div className={styles.dashboard}>
        <AdminHeader />
        <div className={`${styles["dashboard-main"]}`}>
          <h4>Manage Drivers</h4>
          <div className={styles.approvals}>
            <button
              onClick={awaitingTab}
              className={`${click ? "addBorder" : "removeBorder"}`}
            >
              Awaiting Approval (2)
            </button>
            <button
              onClick={approvedTab}
              className={!click ? "addBorder" : "removeBorder"}
            >
              Approved
            </button>
          </div>
          <div className={styles.table}>
            {click && <AwaitingTable approveModal = {acceptModal} />}
            {!click && <ApprovedTable rejectModal = {rejectModal} />}
          </div>
        </div>
      </div>}
    {approve && <AcceptModal closeModal = {setApprove(false)}/>}
    {reject && <RejectModal closeModal = {setApprove(false)}/>}
    </>
  );
};

export default AdminDriver;
