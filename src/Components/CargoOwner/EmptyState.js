import React from "react";
import style from "./ActiveOrder.module.css";
import empty from "../../Asset/Images/emptystate.svg";

const EmptyState = () => {
  return (
    <div className={style.EmptySection}>
      <img src={empty} alt="No Active Order" />
      <h5>Nothing to see here?</h5>
      <p>Click on an order to see details here</p>
    </div>

  );
};

export default EmptyState;
