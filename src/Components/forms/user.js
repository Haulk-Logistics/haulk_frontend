import React from "react";
import formstyle from "./style.module.css";
import { MdPeopleAlt } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { connect } from "react-redux";
import { usertype } from "../../Actions/status";

const Selectuser = (props) => {
  return (
    <div className={formstyle.usersection}>
      {/*Cargo owner button*/}
      <button
        autoFocus
        className={formstyle.usersectionbutton}
        onClick={() => props.dispatch(usertype("cargo_owner"))}
      >
        <MdPeopleAlt /> <span>Cargo Owner</span>
      </button>

      {/*Truck driver button*/}
      <button
        className={formstyle.usersectionbutton}
        onClick={(e) => {
          props.dispatch(usertype("truck_driver"));
        }}
      >
        <FaTruck /> <span>Truck Driver</span>
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    usertype: state.status,
  };
};

export default connect(mapStateToProps)(Selectuser);
