import React from "react";
import { useSelector } from "react-redux";
import stepper from "./style.module.css";

const VerticalStepper = () => {
  const vpage = useSelector((state) => state.page);
  const ordered = useSelector((state) => state.orderdetail.orderedDate)
  const orderedDate = ordered && ordered.split("T")[0]

  return (
    <div>
      <div className={stepper.Verticalcontainer}>
        <div className={stepper.Verticalcontainer__label}>
          <button
            type="button"
            className={vpage >= 0 ? stepper.active : stepper.circle}
          />
          <div className={vpage >= 0 ? stepper.activep : stepper.activeword}>
            <p>Successfully Ordered</p>
            <small>{orderedDate}</small>
          </div>
        </div>

        <div className={vpage >= 1 ? stepper.verticalActiveLine : stepper.verticalLine}></div>
        <div className={stepper.Verticalcontainer__label}>
          <button
            type="button"
            className={vpage >= 1 ? stepper.active : stepper.circle}
          />
          <div className={vpage >= 1 ? stepper.activep : stepper.activeword}>
            <p>Items Picked</p>
            <small>25/12/22</small>
          </div>
        </div>

        <div className={vpage >= 2 ? stepper.verticalActiveLine : stepper.verticalLine}></div>

        <div className={stepper.Verticalcontainer__label}>
          <button
            type="button"
            className={vpage >= 2 ? stepper.active : stepper.circle}
          />
          <div className={vpage >= 2 ? stepper.activep : stepper.activeword}>
            <p>In transit</p>
            <small>25/12/22</small>
          </div>
        </div>

        <div className={vpage >= 3 ? stepper.verticalActiveLine : stepper.verticalLine}></div>

        <div className={stepper.Verticalcontainer__label}>
          <button
            type="button"
            className={vpage >= 3 ? stepper.active : stepper.circle}
          />
          <div className={vpage >= 3 ? stepper.activep : stepper.activeword}>
            <p>Arrives Drop Off Location</p>
            <small>25/12/22</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalStepper;
