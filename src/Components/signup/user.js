import React from "react";
import formstyle from "./style.module.css";
import { MdPeopleAlt } from "react-icons/md";
import { FaTruck } from "react-icons/fa";

const Selectuser = () => {
  return (
    <div className={formstyle.usersection}>
      <button className={formstyle.usersectionbutton}>
        <MdPeopleAlt /> <span>Cargo Owner</span>
      </button>
      <button className={formstyle.usersectionbutton}>
        <FaTruck /> <span>Truck Driver</span>
      </button>
    </div>
  );
};

export { Selectuser };
