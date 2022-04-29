import React from "react";
import style from "./ActiveOrder.module.css";
import empty from "../../Asset/Images/emptystate.svg";

const EmptyState = () => {
  return (
    <div>
      <header className={style.Active__header}>
        <h5>Order Details</h5>
      </header>

      <div className={style.EmptySection}>
        <img src={empty} alt="No Active Order" />
        <h5>Nothing to see here</h5>
        <p>The details of an order will be displayed here</p>
      </div>
    </div>
  );
};

export default EmptyState;
