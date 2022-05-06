import React from "react";
import style from "./ActiveOrder.module.css";
import { useSelector } from "react-redux"
import VerticalStepper from "../Stepper/VerticalStepper";
import EmptyState from "./EmptyState";
import OrderDetailModal from "../Modal/OrderDetailModal";
import emptyImage from "../../Asset/Images/emptystate.svg"



const OrderState = () => {

  const clickedOrder = useSelector((state) => state.orderdetail)

  return (

    <div>
      <header className={style.Active__header}>
        <h5>Order Details</h5>
      </header>
      {!clickedOrder.natureOfGoods ? <div className={style.CargoDetailSection}><EmptyState /></div> :
        <div className={style.cargoDetailSection}>

          { /*<h5 className={style.cargoDetailSection__status}></h5> */}
          <div className={style.StatusForm}>
            <div className={style.DetailSection__Driver}>
              {clickedOrder.driverImage !== "non" ?
                <div className={style.DetailSection__driversProfile}>
                  <div className={style.driverprofile__img}>
                    <img src={clickedOrder.driverImage} alt="driver " />
                  </div>
                  <div className={style.driverprofile__bio}>
                    <h5>{clickedOrder.driverName}</h5>
                    <p>Mobile No: <span>{clickedOrder.driverPhoneno}</span></p>
                    <p>Plate No: <span>{clickedOrder.plateNo}</span></p>
                  </div>
                </div>
                :
                <div className={style.noDriver}>
                  <img src={emptyImage} alt="No Driver Yet" />
                  <p>A driver will be assigned to you shortly</p>
                </div>
              }
            </div>
            <div className={style.Order__Tracking}>
              <VerticalStepper

              />
            </div>
          </div>
          <div className={style.cargoDetailSection__details}>
            <div>
              <h5> Nature of goods</h5> <p> {clickedOrder.natureOfGoods} </p>
            </div>
            <div>
              <h5> Pickup Location</h5> <p> {clickedOrder.pickupLoc}</p>
            </div>
            <div>
              <h5> Drop Off Location</h5> <p> {clickedOrder.dropoffLoc} </p>
            </div>
            <div>
              <h5> Amount</h5> <p>{clickedOrder.amount}</p>
            </div>
          </div>
        </div>}
      <div className={style.mobileModal}>
        <OrderDetailModal
          natureOfGoods={clickedOrder.natureOfGoods}
          pickupLoc={clickedOrder.pickupLoc}
          dropoffLoc={clickedOrder.dropoffLoc}
          amount={clickedOrder.amount}
          driver={clickedOrder.driver}
        />
      </div>

    </div>
  );
};

export default OrderState;
