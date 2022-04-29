import React from "react";
import style from "./ActiveOrder.module.css";
import empty from "../../Asset/Images/emptyActive.svg";

const EmptyOpen = () => {
  return (
    <div className={style.EmptyActive}>
      <img src={empty} alt="No Active Order" />
      <p>No orders available yet.</p>
    </div>
  );
};

export default EmptyOpen;
