import React from "react";
import style from "./ActiveOrder.module.css";
import { useForm } from "react-hook-form";
import { Dropdown } from "../Input";
import { useSelector, useDispatch } from "react-redux";
import { truckDriverAcceptOrder } from "../../Store/Actions/truckDriverOrders";

const OrderState = () => {
  const dispatch = useDispatch();
  const { activeOrder, error } = useSelector(state => state.truckDriverOrders);
  const { register, handleSubmit } = useForm({
    mode: "onTouched",
  });

  

  return (
    <div>
      <header className={style.Active__header}>
        <h5>Order Details</h5>
      </header>

      <div className={style.DetailSection}>
        <p className={style.DetailSection__status}>{oneOpenOrder && oneOpenOrder.order_status}</p>
        <div className={style.StatusForm}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="orderStatus">Order Status Update</label>
            <Dropdown
              className={style.label}
              name="orderStatus"
              id="orderStatus"
              register={register}
              option={[
                { value: "itemsPicked", optionlabel: "Items Picked" },
                { value: "inTransit", optionlabel: "In Transit" },
                { value: "arrivesDropoff", optionlabel: "Arrived Dropoff" },
              ]}
            />
            <p>Update the status of you order here</p>
          </form>
        </div>
        {error && <span style={{color: "red"}} >{error}</span>}
        <div className={style.DetailSection__details}>
          <div>
            <h5> Nature of goods</h5> <p>{oneOpenOrder && oneOpenOrder.nature_of_goods}</p>
          </div>
          <div>
            <h5> Pickup Location</h5> <p>{oneOpenOrder && oneOpenOrder.pick_off_location}</p>
          </div>
          <div>
            <h5> Drop Off Location</h5> <p> {oneOpenOrder && oneOpenOrder.drop_off_location} </p>
          </div>
          <div>
            <h5> Pick Up Date</h5> <p> {oneOpenOrder && oneOpenOrder.pick_up_date} </p>
          </div>
          <div>
            <h5>Container No</h5> <p>{oneOpenOrder && oneOpenOrder.container_number}</p>
          </div>
          <div>
            <h5> Shipping Line</h5> <p> {oneOpenOrder && oneOpenOrder.shipping_line} </p>
          </div>
          <div>
            <h5> Pay</h5> <p>{oneOpenOrder && oneOpenOrder.amount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderState;
