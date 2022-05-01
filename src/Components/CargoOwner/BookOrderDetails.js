import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import style from "./BookOrderDetails.module.css";
import sucessbell from "../../Asset/Images/successbell.svg"
import TruckRequest from "./TruckRequest";




const BookOrderDetails = () => {

  const [status, setStatus] = useState("")
  const dispatch = useDispatch()
  const token = localStorage.getItem("haulk-app-auth") && JSON.parse(localStorage.getItem("haulk-app-auth"));
  const navigate = useNavigate()
  const [orderDetail, setOrderDetail] = useState()


  console.log(orderDetail)
  useEffect(() => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    let reference = params.reference;

    const verifyPayment = async () => {
      await axios({
        method: "post",
        url: "https://haulk.herokuapp.com/api/book_a_truck/verify_payment",
        headers: { Authorization: `Bearer ${token}` },
        data: { reference },
      }).then((result) => {
        setOrderDetail(result.data)
        console.log(result)
      }).catch((error) => {
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
    }
    verifyPayment()
  }, [token]);

  const { pathname } = useLocation();
  const path = pathname.split("/");

  return orderDetail && orderDetail.status === "paysuccess" ?
    (
      <div className={style.BookOrder__Container}>
        <div className={style.BookOrder__button}>
          <button onClick={() => { navigate(`/${path[1]}/track-order`) }} >Track Order</button></div>
        <div className={style.BookOrder__Driver}>
          <div className={style.Booked__Driverdetail}>
            <img src={sucessbell} />
            <div>
              <h5>Booking Confirmed!</h5>
              <p>You'll be notified when a driver has been assigned to you.</p>
            </div>
          </div>
        </div>

        <div className={style.BookOrder__Order}>
          <h5>Order Details</h5>
          <div className={style.BookOrder__Orderdetail}>
            <div className={style.Booked__Orderdetail}>
              <div>
                <h5>Nature of Goods</h5>
                <p>{orderDetail.data.natureOfGoods}</p>
              </div>
              <div>
                <h5>Pickup Location</h5>
                <p>{orderDetail.data.pickUpLocation}</p>
              </div>
              <div>
                <h5>Drop Off Location</h5>
                <p>{orderDetail.data.dropOffLocation}</p>
              </div>
              <div>
                <h5>Pick Up Date</h5>
                <p>{orderDetail.data.pickUpDate}</p>
              </div>
            </div>

            <div className={style.Booked__Orderdetail}>
              <div>
                <h5>Truck Type</h5>
                <p>{orderDetail.data.truckType}</p>
              </div>
              <div>
                <h5>Container Number</h5>
                <p>{orderDetail.data.containerNumber}</p>
              </div>
              <div>
                <h5>Shipping Line</h5>
                <p>{orderDetail.data.shippingLine}</p>
              </div>
              <div>
                <h5>Amount</h5>
                <p>{orderDetail.data.transactionAmount} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : orderDetail && navigate(`/${path[1]}/${path[2]}`);
};

export default BookOrderDetails;
