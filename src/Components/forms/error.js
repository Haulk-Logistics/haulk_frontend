import React from "react";
import errorstyle from "./style.module.css";

const Formerror = ({ error }) => {
  return <p className={errorstyle.error}>{error.message}</p>;
};

export default Formerror;
