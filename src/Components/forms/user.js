import React from "react";
import formstyle from "./style.module.css";
import { connect, useSelector } from "react-redux";
import { usertype } from "../../Store/Actions/status";
import Steps from "../Stepper/stepper";

const Selectuser = (props) => {
  const user = useSelector((state) => state.status);

  return (
    <div>
      <div className={formstyle.usersection}>
        {/*Cargo owner button*/}
        <button
          style={{ borderRadius: ".6rem 0 0 .6rem" }}
          autoFocus={user === "cargoowner" ? true : false}
          className={
            props.usertype === "cargoowner"
              ? formstyle.focus
              : formstyle.usersectionbutton
          }
          onClick={() => props.dispatch(usertype("cargoowner"))}
        >
          <span style={{ marginLeft: ".5rem" }}>Cargo Owner</span>
        </button>

        {/*Truck driver button*/}
        <button
          style={{ borderRadius: "0 .6rem .6rem 0" }}
          autoFocus={user === "truckdriver" ? true : false}
          className={
            props.usertype === "truckdriver"
              ? formstyle.focus
              : formstyle.usersectionbutton
          }
          onClick={(e) => {
            props.dispatch(usertype("truckdriver"));
          }}
        >
          <span
            style={{
              marginLeft: ".5rem",
            }}
          >
            Truck Driver
          </span>
        </button>
      </div>
      <div
        style={{ margin: "1rem 0" }}
        className={
          props.usertype === "truckdriver"
            ? formstyle.step1
            : formstyle.hidestep
        }
      >
        <Steps />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    usertype: state.status,
  };
};

export default connect(mapStateToProps)(Selectuser);
