import React from "react";
import formstyle from "./style.module.css";

const Button = ({ name, status }) => {
  return (
    <button className={formstyle.button}>
      {status ? name : "Loading...."}
    </button>
  );
};

export default Button;
