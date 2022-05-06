import React from "react";
import style from "./ActiveOrder.module.css";
import empty from "../../Asset/Images/emptyActive.svg";

const EmptyActive = ({ message }) => {
  return (
    <div className={style.EmptyActive}>
      <img src={empty} alt="No Active Order" />
      <p>{message}</p>
    </div>
  );
};

export default EmptyActive;
