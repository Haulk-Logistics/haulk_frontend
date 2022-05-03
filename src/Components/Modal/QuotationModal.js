//Reusable component for Quotation Modal

import React from "react";
import styles from "./QuotationModal.module.css";
import { FiX } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Pagecontrol } from "../../Store/Actions/pagecontrol";

const Modal = (props) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={`${styles["modal-heading"]}`}>
          <h4 className={`${styles["modal-heading-text"]}`}>Quotation</h4>
          <button
            className={`${styles["modal-heading-cancel"]}`}
            onClick={props.closeModal}
          >
            <FiX />
          </button>
        </div>
        <div className={`${styles["modal-main"]}`}>
          <div className={`${styles["modal-content"]}`}>
            <p>Location</p>
            <p>
              {props.source} to {props.destination}
            </p>
          </div>
          <div className={`${styles["modal-content"]}`}>
            <p>Truck Type</p>
            <p>{props.truck}</p>
          </div>
          <div className={`${styles["modal-content"]}`}>
            <p>Container Size</p>
            <p>{props.size} Tons</p>
          </div>
          <div className={styles.divider}></div>
          <div className={`${styles["modal-content"]}`}>
            <p>Amount</p>
            <p>{props.amount}(NGN)</p>
          </div>
        </div>
        <div className={`${styles["modal-footing"]}`}>
          <button
            className={`${styles["modal-footing-button"]}`}
            onClick={props.closeModal}
          >
            Cancel
          </button>
          <button
            className={`${styles["modal-footing-button"]}`}
            onClick={() => {
              dispatch(Pagecontrol("accepted"));

            }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
