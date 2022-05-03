import React from "react";
import style from "./ActiveOrder.module.css";
import EmptyActive from "./EmptyActive";

const Active = () => {

  return (
    <div className={style.Active__0rder}>
      <header className={style.Active__header}>
        <h5>Active Order</h5>
      </header>
      <div className={style.Active__OrderCard}>
        <EmptyActive />
      </div>
    </div>
  );
};

export default Active;
