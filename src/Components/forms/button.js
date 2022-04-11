import React from "react";
import formstyle from "./style.module.css";

const Button = ({ name }) => {
  return <button className={formstyle.button}>{name}</button>;
};

export default Button;
