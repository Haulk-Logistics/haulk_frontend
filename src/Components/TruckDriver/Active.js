import React from "react";
import style from "./ActiveOrder.module.css";
import EmptyActive from "./EmptyActive";

const Active = () => {

  return (
    <div className={style.Active__0rder}>
      <div className={style.Active__OrderCard}>
        <EmptyActive message="No active order" />
      </div>
    </div>
  );
};

export default Active;
