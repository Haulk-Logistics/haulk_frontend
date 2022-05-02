import React from "react";
import { Outlet } from "react-router";
import BookForm from "../BookForm/BookForm";
import style from "./TruckRequest.module.css";

const TruckRequest = () => {
  return (
    <div className={style.Truck__Container}>
      <BookForm />
      <Outlet />
    </div>
  );
};

export default TruckRequest;
