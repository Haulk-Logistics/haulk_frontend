import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import styles from "./RejectModal.module.css";
import { FiX } from "react-icons/fi";
import { rejectDriver } from "../../Store/Actions/Admin";
import { toast } from "react-toastify";

const RejectModal = (props) => {
  const { id, rejected } = useSelector((state) => state.admin);
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    if (id) {
      dispatch(rejectDriver(data.textfield, id));
    }
    if (rejected) {
        props.closeModal();
      toast.success(rejected);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={`${styles["modal-heading"]}`}>
          <h5>Rejection Reason</h5>
          <button
            className={`${styles["modal-heading-cancel"]}`}
            onClick={props.closeModal}
          >
            <FiX />
          </button>
        </div>
        <div className={`${styles["modal-main"]}`}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`${styles["reject-reason"]}`}
          >
            <textarea
              {...register("textfield", { required: true })}
              name="textfield"
              placeholder="Enter a reason for rejection"
            />

            <div className={`${styles["modal-footing"]}`}>
              <button
                className={`${styles["modal-footing-button"]}`}
                onClick={props.closeModal}
              >
                Cancel
              </button>
              <button
                className={`${styles["modal-footing-button"]}`}
                type="submit"
              >
                Reject
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RejectModal;
