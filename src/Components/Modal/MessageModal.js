import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import modal from "./Modal.module.css";
import Modal from "react-modal";
import envelope from "../../Asset/Images/envelope.svg";
import { useDispatch, useSelector } from "react-redux";
import { modalStatus } from "../../Store/Actions/ModalStatus";

const MessageModal = () => {
  const status = useSelector((state) => state.modalStatus);
  const dispatch = useDispatch();

  const CloseModal = () => {
    dispatch(modalStatus({ status: false }));
  };

  return (
    <Modal
      isOpen={status.status}
      ariaHideApp={false}
      closeTimeoutMS={200}
      style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,0.25)",
        },
      }}
      className={modal.overlay}
    >
      <div className={modal.container}>
        <div className={modal.header}>
          <h5 style={{ fontWeight: "500" }}> Mail Sent </h5>
          <button onClick={CloseModal}>
            <AiOutlineClose />
          </button>
        </div>
        <div className={modal.body}>
          <img src={envelope} alt="MESSAGE" />
          <p>{status.message}</p>
          <p>
            Didn't get a link? <a href={status.link}>Resend link</a>
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default MessageModal;
