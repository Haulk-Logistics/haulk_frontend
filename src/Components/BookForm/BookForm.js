import React from "react";
import { useSelector } from "react-redux";
import Payment from "../CargoOwner/Payment";
import styles from "./BookForm.module.css";
import BookingForm from "./BookingForm";

const BookForm = (props) => {
  const stateOfPage = useSelector((state) => state.page);

  return (
    <div className={styles.Book__Body}>
      <div className={styles.main}>
        <div className={styles.Book_Heading}>
          <h3>Book A Truck</h3>
          <p>
            You are one-step away from solving your logistics concerns. Make
            that move today!
          </p>
        </div>
        <div className={styles.stepper}></div>
        {stateOfPage === "accepted" ? <Payment /> : <BookingForm />}
      </div>
    </div>
  );
};

export default BookForm;