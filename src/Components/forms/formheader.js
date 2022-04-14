import React from "react";
import headerstyle from "./style.module.css";
import haulklogo from "../../Asset/logo/MobileLogo.svg";
import { connect } from "react-redux";

const Formheader = (props) => {
  return (
    <header className={headerstyle.header}>
      <img
        src={haulklogo}
        alt="HAULK LOGO"
        className={props.hide ? headerstyle.hidestep : headerstyle.logo}
      />
      <h3>{props.head}</h3>
      <p>{props.paragraph}</p>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    usertype: state.status,
  };
};

export default connect(mapStateToProps)(Formheader);
