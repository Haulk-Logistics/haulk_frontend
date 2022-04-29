import React from "react";
import BookForm from "../BookForm/BookForm";
import Payment from "./Payment";
import style from "./TruckRequest.module.css";

const TruckRequest = () => {
  return (
    <div className={style.Truck__Container}>
      <BookForm />
    </div>
  );
};

export default TruckRequest;
