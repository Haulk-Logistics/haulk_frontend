//Reusable component for Modal 

import React, {useState} from 'react';
import styles from './Modal.module.css';
import {FiX} from "react-icons/fi";

const Modal = (props) => {
    
    return (
        <div className = {styles.modal}>
            <div className = {`${styles['modal-heading']}`}>
                <h3 className = {`${styles['modal-heading-text']}`}>Request Quotation</h3>
                <button className = {`${styles['modal-heading-cancel']}`} onClick = {props.closeModal}>
                    <FiX/>
                </button>
            </div>
            <div className = {`${styles['modal-main']}`}>
                <div className = {`${styles['modal-content']}`}>
                    <p>Location</p>
                    <p>Abuja to Lagos</p>
                </div>
                <div className = {`${styles['modal-content']}`}>
                    <p>Truck Type</p>
                    <p>Mini Covered Truck</p>
                </div>
                <div className = {`${styles['modal-content']}`}>
                    <p>Container Size</p>
                    <p>50 Tonnes</p>
                </div>
                <div className = {styles.divider}></div>
                <div className = {`${styles['modal-content']}`}>
                    <p>Amount</p>
                    <p>1,000,000(NGN)</p>
                </div>
            </div>
            <div className = {`${styles['modal-footing']}`}>
                <button className = {`${styles['modal-footing-button']}`} onClick = {props.closeModal}>Cancel</button>
                <button className = {`${styles['modal-footing-button']}`}>Accept</button>
            </div>
        </div>
    );
}
 
export default Modal;