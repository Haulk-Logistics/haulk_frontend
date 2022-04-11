//Reusable component for normal Modals

import React, {useState} from "react";
import {FiX} from "react-icons/fi";
import styles from "./Modal.module.css";

const Modal = (props) => {
    return (
        <div className={styles.modal}>
            <div className = {`${styles['modal-heading']}`}>
    <h3 className = {`${styles['modal-heading-text']}`}>{props.heading}</h3>
                <button className = {`${styles['modal-heading-cancel']}`} onClick = {props.closeModal}>
                    <FiX/>
                </button>
            </div>
            <div className = {`${styles['modal-main']}`}>
                <div className = {`${styles['modal-main-img']}`}>
                    <img src={props.img} alt=""/>
                </div>
                <div className = {`${styles['modal-main-text']}`}>
                    <p>{props.text}</p>
                </div>
                {props.btn && <div className = {`${styles['modal-main-button']}`}>
                    <button>Proceed</button>
                </div>}
            </div>
        </div>
    );
}
 
export default Modal;