import React, { useState } from "react";


import styles from "./AdminDriver.module.css";
import AdminHeader from "../AdminHeader/AdminHeader";
import AwaitingTable from "../Tables/AwaitingTable";
import ApprovedTable from "../Tables/ApprovedTable";
import AcceptModal from "../Modal/AcceptModal";
import RejectModal from "../Modal/RejectModal";
import DeleteModal from "../Modal/DeleteModal";

const AdminDriver = () => {
  const [click, setClick] = useState(true);
  const [approve, setApprove] = useState(false);
  const [reject, setReject] = useState(false);
  const [remove, setRemove] = useState(false)

  const awaitingTab = () => {
    setClick(true);
  };
  const approvedTab = () => {
    setClick(false);
  };

  const acceptModal = () => {
    setApprove(true);
  };

  const rejectModal = () => {
    setReject(true)
  }

  const removeModal = () => {
    setRemove(true)
  }

  return (
    <>
      <div className={styles.dashboard}>
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
            {click && <AwaitingTable approveModal={acceptModal} rejectModal={rejectModal}/>}
            {!click && <ApprovedTable deleteModal ={removeModal}/>}
          </div>
        </div>
      </div>}
      {approve && <AcceptModal closeModal={() => setApprove(false)} />}
      {reject && <RejectModal closeModal={() => setReject(false)} />}
      {remove && <DeleteModal closeModal={() => setRemove(false)}/>}
    </>
  );
};

export default AdminDriver;
