import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Payment.module.css";
import { Pagecontrol } from "../../Store/Actions/pagecontrol";
import axios from "axios";
import { useNavigate } from "react-router";

const Payment = () => {
  const orderSummary = useSelector((state) => state.summary);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePayment = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("natureOfGoods", orderSummary.natureOfGoods);
    formData.append("truckType", orderSummary.truckType);
    formData.append("dropOffLocation", orderSummary.dropOffLocation);
    formData.append("pickUpLocation", orderSummary.pickUpLocation);
    formData.append("pickUpDate", orderSummary.pickUpDate);
    formData.append("containerSize", orderSummary.containerSize);
    formData.append("containerNumber", orderSummary.containerNumber);
    formData.append("shippingLine", orderSummary.shippingLine);
    formData.append("amount", orderSummary.amount);
    formData.append("cargoImage", orderSummary.cargoImage[0]);

    const userToken = JSON.parse(localStorage.getItem("haulk-app-auth"));

    const Pay_Url =
      "https://haulk.herokuapp.com/api/book_a_truck/initialize_payment";

    await axios
      .post(Pay_Url, formData, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        const paystack = res.data.authorization_url;
        window.addEventListener("redirect", window.open(paystack));
      })
      .catch((error) => {
        dispatch({
          type: "error",
          payload: {
            title: "Error!",
            message: error.response
              ? error.response.data.message
              : "Network Error",
          },
        });
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={style.Payment__container}>
      <h5 className={style.Payment__containerheader}>Order Summary</h5>
      <div className={style.Payment__OrderSummary}>
        <div>
          <h5>Nature of goods</h5>
          <p>{orderSummary.natureOfGoods} </p>
        </div>
        <div>
          <h5>Pickup</h5>
          <p>{orderSummary.pickUpLocation}</p>
        </div>
        <div>
          <h5>Drop Off</h5>
          <p>{orderSummary.dropOffLocation} </p>
        </div>
        <div>
          <h5>Pick Up Date</h5>
          <p>{orderSummary.pickUpDate} </p>
        </div>
        <div>
          <h5>Truck Type</h5>
          <p>{orderSummary.truckType} </p>
        </div>
        <div>
          <h5>Container No</h5>
          <p>{orderSummary.containerNumber} </p>
        </div>
        <div>
          <h5>Shipping Line</h5>
          <p>{orderSummary.shippingLine} </p>
        </div>
        <div>
          <h5>Amount</h5>
          <p>{orderSummary.amount} </p>
        </div>
      </div>

      <div className={style.Payment__buttons}>
        <button className={style.Payment__paybutton} onClick={handlePayment}>
          {isLoading ? "Loading..." : "Pay"}
        </button>
        <button
          className={style.Payment__cancelbutton}
          onClick={() => {
            dispatch(Pagecontrol(""));
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Payment;
