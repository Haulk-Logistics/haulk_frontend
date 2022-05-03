import React from "react";

import styles from "./AcceptModal.module.css";
import {FiX} from "react-icons/fi";

const AcceptModal = (props) => {
    return (
        <div className = {styles.overlay}>
            <div className = {styles.modal}>
                <div className = {`${styles['modal-heading']}`}>
                    <h5>Accept Driver</h5>
                    <button className = {`${styles['modal-heading-cancel']}`} onClick = {props.closeModal}>
                        <FiX/>
                    </button>
                </div>
                <div className = {`${styles['modal-main']}`}>
                    <p>
                        Are you sure you want to approve this driver? Note that this action cannot be reversed.
                    </p>
                </div>
                <div className = {`${styles['modal-footing']}`}>
                    <button className = {`${styles['modal-footing-button']}`} onClick = {props.closeModal}>Cancel</button>
                    <button className = {`${styles['modal-footing-button']}`}>Accept</button>
                </div>
            </div>
        </div>
    );
}
 
export default AcceptModal;