import React from "react";
import style from "./ActiveOrder.module.css";
import { useForm } from "react-hook-form";
import { Dropdown } from "../Input";

const OrderState = () => {
  const { register, handleSubmit } = useForm({
    mode: "onTouched",
  });

  return (
    <div>
      <header className={style.Active__header}>
        <h5>Order Details</h5>
      </header>

      <div className={style.DetailSection}>
        <p className={style.DetailSection__status}>Active</p>
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
        <div className={style.DetailSection__details}>
          <div>
            <h5> Nature of goods</h5> <p> 200 pieces of glass (fragile) </p>
          </div>
          <div>
            <h5> Pickup Location</h5> <p> 27, Jigamo str Oshodi Lagos</p>
          </div>
          <div>
            <h5> Drop Off Location</h5> <p> Portharcout Port </p>
          </div>
          <div>
            <h5> Pick Up Date</h5> <p> 24th Apr, 2022 </p>
          </div>
          <div>
            <h5>Container No</h5> <p> 09-gt5688</p>
          </div>
          <div>
            <h5> Shipping Line</h5> <p> GIGL </p>
          </div>
          <div>
            <h5> Pay</h5> <p>N200,000</p>
          </div>

          <button className={style.DetailSection__button}>Accept Order</button>
        </div>
      </div>
    </div>
  );
};

export default OrderState;
