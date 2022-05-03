import React, { useEffect } from "react";
import alert from "./ErrorComponent.module.css";
import { FaInfoCircle } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";

const Messagepop = ({ head, message, err }) => {
  const dispatch = useDispatch();

  const close = (e) => {
    dispatch({ type: "close_modal" });
  };

  useEffect(() => {
    setTimeout(() => {
      close()
    }, 7000)
  })

  return (
    <div className={err === "error" ? alert.errpopup : alert.popup}>
      <div className={alert.container}>
        {err && (
          <FaInfoCircle
            style={{ width: "2rem", height: "2rem", paddingRight: ".3rem" }}
          />
        )}
        <div className={alert.write}>
          <div className={alert.header}>
            <h4>{head}</h4>
            <button onClick={close}>
              {/** <button onClick="this.parentElement.style.display='none';">  */}
              <AiOutlineClose />
            </button>
          </div>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Messagepop;
