import React from "react";
import { useSelector } from "react-redux";
import stepper from "./style.module.css";

const VerticalStepper = () => {
  const ordered = useSelector((state) => state.orderdetail.orderedDate)
  const status = useSelector((state) => state.orderdetail.orderStatus)
  const orderedDate = ordered && ordered.split("T")[0]

  const thedate = useSelector((state) => state.orderdetail)

  console.log(thedate && thedate)

  return (
    <div>
      <div className={stepper.Verticalcontainer}>
        <div className={stepper.Verticalcontainer__label}>
          <button
            type="button"
            className={
              status === "processing" ||
                status === "pending" ||
                status === "accepted" ||
                status === "picked_up" ||
                status === "in_transit" ||
                status === "dropped_off"
                ? stepper.active : stepper.circle}
          />
          <div className={
            status === "processing" ||
              status === "pending" ||
              status === "accepted" ||
              status === "picked_up" ||
              status === "in_transit" ||
              status === "dropped_off"
              ? stepper.activep : stepper.activeword}>
            <p>Successfully Ordered</p>
            <small>{orderedDate}</small>
          </div>
        </div>

        <div className={
          status === "picked_up" ||
            status === "in_transit" ||
            status === "dropped_off"
            ? stepper.verticalActiveLine : stepper.verticalLine}></div>
        <div className={stepper.Verticalcontainer__label}>
          <button
            type="button"
            className={
              status === "picked_up" ||
                status === "in_transit" ||
                status === "dropped_off"
                ? stepper.active : stepper.circle}
          />
          <div className={
            status === "picked_up" ||
              status === "in_transit" ||
              status === "dropped_off"
              ? stepper.activep : stepper.activeword}>
            <p>Items Picked</p>
            <small>{true ? "no date yet" : ""}</small>
          </div>
        </div>

        <div className={status === "in_transit" ||
          status === "dropped_off"
          ? stepper.verticalActiveLine : stepper.verticalLine}></div>

        <div className={stepper.Verticalcontainer__label}>
          <button
            type="button"
            className={
              status === "in_transit" ||
                status === "dropped_off"
                ? stepper.active : stepper.circle}
          />
          <div className={
            status === "in_transit" ||
              status === "dropped_off"
              ? stepper.activep : stepper.activeword}>
            <p>In transit</p>
            <small>{true ? "no date yet" : ""}</small>
          </div>
        </div>

        <div className={status === "dropped_off" ? stepper.verticalActiveLine : stepper.verticalLine}></div>

        <div className={stepper.Verticalcontainer__label}>
          <button
            type="button"
            className={status === "dropped_off" ? stepper.active : stepper.circle}
          />
          <div className={status === "dropped_off" ? stepper.activep : stepper.activeword}>
            <p>Arrives Drop Off Location</p>
            <small>{true ? "no date yet" : ""}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalStepper;
