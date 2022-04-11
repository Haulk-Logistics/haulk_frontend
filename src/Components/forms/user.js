import React from "react";
import formstyle from "./style.module.css";
import { MdPeopleAlt } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { connect } from "react-redux";
import { usertype } from "../../Actions/status";
import step1 from "../../Assets/Images/step1.svg";
import step2 from "../../Assets/Images/step2.svg";
import step3 from "../../Assets/Images/step3.svg";

const Selectuser = (props) => {
  return (
    <div>
      <div className={formstyle.usersection}>
        {/*Cargo owner button*/}
        <button
          autoFocus
          className={
            props.usertype === "cargo_owner"
              ? formstyle.focus
              : formstyle.usersectionbutton
          }
          onClick={() => props.dispatch(usertype("cargo_owner"))}
        >
          <MdPeopleAlt /> <span>Cargo Owner</span>
        </button>

        {/*Truck driver button*/}
        <button
          className={
            props.usertype === "truck_driver"
              ? formstyle.focus
              : formstyle.usersectionbutton
          }
          onClick={(e) => {
            props.dispatch(usertype("truck_driver"));
          }}
        >
          <FaTruck /> <span>Truck Driver</span>
        </button>
      </div>
      <img
        src={step1}
        alt="Step1"
        className={
          props.usertype === "truck_driver"
            ? formstyle.step1
            : formstyle.hidestep
        }
      />
      <img
        src={step2}
        alt="Step2"
        className={false ? formstyle.step2 : formstyle.hidestep}
      />
      <img
        src={step3}
        alt="Step3 "
        className={false ? formstyle.step3 : formstyle.hidestep}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    usertype: state.status,
  };
};

export default connect(mapStateToProps)(Selectuser);
