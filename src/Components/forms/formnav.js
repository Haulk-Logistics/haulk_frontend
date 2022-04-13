import React from "react";
import haulklogo from "../../Assets/logo/MobileLogo.svg";
import navstyle from "./style.module.css";

const Formnav = () => {
  return (
    <nav className={navstyle.nav}>
      <img src={haulklogo} alt="HAULK " />
    </nav>
  );
};

export default Formnav;
