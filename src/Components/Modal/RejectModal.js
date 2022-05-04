import React from "react";
import {useForm} from 'react-hook-form';

import styles from "./RejectModal.module.css";
import {FiX} from "react-icons/fi";

const RejectModal = (props) => {
    const {register, handleSubmit} = useForm();

    const onSubmit = () => {
        console.log("Removed");
    }

    return (
        <div className = {styles.overlay}>
            <div className={styles.modal}>
                <div className = {`${styles['modal-heading']}`}>
                    <h5>Rejection Reason</h5>
                    <button className = {`${styles['modal-heading-cancel']}`} onClick = {props.closeModal}>
                        <FiX/>
                    </button>
                </div>
                <div className = {`${styles['modal-main']}`}>
                    <form onSubmit = {handleSubmit(onSubmit)} className = {`${styles["reject-reason"]}`}>
                        <textarea {...register("textfield", {required: true})} placeholder = "Enter a reason for rejection"/>

                        <div className = {`${styles['modal-footing']}`}>
                            <button className = {`${styles['modal-footing-button']}`} onClick = {props.closeModal}>Cancel</button>
                            <button className = {`${styles['modal-footing-button']}`}type = "submit">Accept</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default RejectModal;