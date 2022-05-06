import React from "react";

import styles from "./AcceptModal.module.css";
import { FiX } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { acceptDriver } from "../../Store/Actions/Admin";
import { toast } from "react-toastify";

const AcceptModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const { id, loading, accepted } = useSelector((state) => state.admin);
  const accept = () => {
    if (id) {
      dispatch(acceptDriver(id));
    }
  };

  if (accepted) {
    closeModal();
    toast.success(accepted);
    window.location.reload();
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={`${styles["modal-heading"]}`}>
          <h5>Accept Driver</h5>
          <button
            className={`${styles["modal-heading-cancel"]}`}
            onClick={closeModal}
          >
            <FiX />
          </button>
        </div>
        <div className={`${styles["modal-main"]}`}>
          <p>
            Are you sure you want to approve this driver? Note that this action
            cannot be reversed.
          </p>
        </div>
        <div className={`${styles["modal-footing"]}`}>
          <button
            className={`${styles["modal-footing-button"]}`}
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className={`${styles["modal-footing-button"]}`}
            onClick={accept}
          >
            {loading ? "Verifying...." : "Accept"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcceptModal;
