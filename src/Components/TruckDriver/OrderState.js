import React from "react";
import style from "./ActiveOrder.module.css";
import { useForm } from "react-hook-form";
import { Dropdown } from "../Input";
import { useSelector, useDispatch } from "react-redux";
import { truckDriverAcceptOrder } from "../../Store/Actions/truckDriverOrders";
import EmptyState from "../CargoOwner/EmptyState";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const OrderState = () => {
  const dispatch = useDispatch();
  const { loading, acceptOrder, activeOrder, error } = useSelector(state => state.truckDriverOrders);
  const oneOpenOrder = useSelector((state) => state.orderdetail)
  const schema = yup.object().shape({
    status: yup.string().required(""),
  });



  const { register, handleSubmit } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
    defaultValues: activeOrder && {
      status: `${activeOrder.order_status}`,
    },
  });





  const orderAccept = (id) => {
    const ans = window.confirm("Are u sure u want to accept this order");
    if (ans) {
      dispatch(truckDriverAcceptOrder(id))
    }
    return
  }



  const onsubmit = async (data) => {
    const token = localStorage.getItem("haulk-app-auth") && JSON.parse(localStorage.getItem("haulk-app-auth"));
    const updateURL = `https://haulk.herokuapp.com/api/driver/update_order_status/${oneOpenOrder.id}`


    await axios({
      method: "put",
      url: updateURL,
      headers: { Authorization: `Bearer ${token}` },
      data: data,
    }).then((result) => {
      dispatch({
        type: "success",
        payload: {
          title: "Successful!",
          message: result.message
        },
      });
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

  return activeOrder && typeof activeOrder !== "string" && oneOpenOrder.id !== undefined ? (
    <div>
      <header className={style.Active__header}>
        <h5>Order Details</h5>
      </header>

      <div className={style.DetailSection}>
        <p className={style.DetailSection__status}>{oneOpenOrder && oneOpenOrder.order_status}</p>
        <div>
          {activeOrder && (typeof activeOrder !== "string" && oneOpenOrder.orderStatus === "accepted" || oneOpenOrder.orderStatus === "in_transit" || oneOpenOrder.orderStatus === "picked_up") ?
            <div className={style.StatusForm}>
              <form onChange={handleSubmit(onsubmit)}>
                <label htmlFor="status">Order Status Update</label>
                <Dropdown
                  className={style.label}
                  name="status"
                  id="status"
                  register={register}
                  option={[
                    { value: "", optionlabel: "update status" },
                    { value: "accepted", optionlabel: "Accepted" },
                    { value: "picked_up", optionlabel: "Items Picked" },
                    { value: "in_transit", optionlabel: "In Transit" },
                    { value: "dropped_off", optionlabel: "Arrived" },
                  ]}
                />
                <p>Update the status of you order here</p>
              </form>
            </div> : <div></div>}
        </div>
        {acceptOrder && <span style={{ color: "green" }}>{acceptOrder}</span>}
        {error && <span style={{ color: "red" }} >{error}</span>}
        <div className={style.DetailSection__details}>
          <div>
            <h5> Nature of goods</h5> <p>{oneOpenOrder && oneOpenOrder.natureOfGoods}</p>
          </div>
          <div>
            <h5> Pickup Location</h5> <p>{oneOpenOrder && oneOpenOrder.pickupLoc}</p>
          </div>
          <div>
            <h5> Drop Off Location</h5> <p> {oneOpenOrder && oneOpenOrder.dropoffLoc} </p>
          </div>
          <div>
            <h5> Pick Up Date</h5> <p> {oneOpenOrder && oneOpenOrder.pickupDate} </p>
          </div>
          <div>
            <h5>Container No</h5> <p>{oneOpenOrder && oneOpenOrder.containerNo}</p>
          </div>
          <div>
            <h5> Shipping Line</h5> <p> {oneOpenOrder && oneOpenOrder.shippingLine} </p>
          </div>
          <div>
            <h5> Pay</h5> <p>{oneOpenOrder && oneOpenOrder.amount}</p>
          </div>

          {activeOrder && typeof activeOrder === "string" ? <button className={style.DetailSection__button} onClick={() => orderAccept(oneOpenOrder.id)} >{loading ? "Processing..." : "Accept Order"}</button> : ""}
        </div>
      </div>
    </div>
  ) : <div>
    <header className={style.Active__header}>
      <h5>Order Details</h5>
    </header>
    <div className={style.DetailSection}><EmptyState /></div>
  </div>
};

export default OrderState;
