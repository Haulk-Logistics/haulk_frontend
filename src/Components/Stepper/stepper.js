import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { formstep } from "../../Store/Actions/stepper";
import stepper from "./style.module.css";

const Steps = () => {
  const dispatch = useDispatch();
  const vpage = useSelector((state) => state.page);
  return (
    <div className={stepper.container}>
      <div className={vpage >= 0 ? stepper.activeline : stepper.line}></div>
      <div className={vpage >= 0 ? stepper.activeline : stepper.line}></div>
      <button
        type="button"
        className={vpage >= 0 ? stepper.active : stepper.circle}
        onClick={() => {
          dispatch(formstep(0));
        }}
      >
        1
      </button>
      <div className={vpage >= 1 ? stepper.activeline : stepper.line}></div>
      <div className={vpage >= 1 ? stepper.activeline : stepper.line}></div>
      <button
        type="button"
        disabled={vpage < 1 ? true : false}
        className={vpage >= 1 ? stepper.active : stepper.circle}
        onClick={() => {
          dispatch(formstep(1));
        }}
      >
        2
      </button>
      <div className={vpage >= 2 ? stepper.activeline : stepper.line}></div>
      <div className={vpage >= 2 ? stepper.activeline : stepper.line}></div>
      <button
        type="button"
        disabled={vpage < 2 ? true : false}
        className={vpage >= 2 ? stepper.active : stepper.circle}
        onClick={() => {
          dispatch(formstep(2));
        }}
      >
        3
      </button>
      <div className={vpage >= 3 ? stepper.activeline : stepper.line}></div>
      <div className={vpage >= 3 ? stepper.activeline : stepper.line}></div>
    </div>
  );
};

export default Steps;
