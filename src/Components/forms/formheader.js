import React from "react";
import headerstyle from "./style.module.css";
import haulklogo from "../../Assets/logo/MobileLogo.svg";

const Formheader = ({ head, paragraph }) => {
  return (
    <header className={headerstyle.header}>
      <img src={haulklogo} alt="HAULK LOGO" className={headerstyle.logo} />
      <h3>{head}</h3>
      <p>{paragraph} </p>
    </header>
  );
};

export default Formheader;
