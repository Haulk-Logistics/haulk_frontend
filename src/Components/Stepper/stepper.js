import React from "react";
import { useDispatch } from "react-redux";
import { formstep } from "../../Actions/stepper";
import stepper from "./style.module.css";

const Steps = () => {
  const dispatch = useDispatch();
  return (
    <div className={stepper.container}>
      <div className={stepper.line}></div>
      <button
        type="button"
        className={stepper.circle}
        onClick={() => {
          dispatch(formstep(0));
        }}
      >
        1
      </button>
      <div className={stepper.line}></div>
      <div className={stepper.line}></div>
      <button
        type="button"
        className={stepper.circle}
        onClick={() => {
          dispatch(formstep(1));
        }}
      >
        2
      </button>
      <div className={stepper.activeline}></div>
      <div className={stepper.line}></div>
      <button
        type="button"
        className={stepper.active}
        onClick={() => {
          dispatch(formstep(2));
        }}
      >
        3
      </button>
      <div className={stepper.line}></div>
    </div>
  );
};

export default Steps;
