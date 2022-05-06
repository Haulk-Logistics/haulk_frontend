import React, { useEffect } from "react";
import TDActiveOrderCard from "../Cards/OrderCard/ActiveOrder";
import Active from "./Active";
import style from "./ActiveOrder.module.css";
import Open from "./Open";
import OrderDetail from "./OrderDetail";
import { useDispatch, useSelector } from "react-redux";
import { OrderDetails } from "../../Store/Actions/OrderDetails";
import { orderModalStatus } from "../../Store/Actions/ModalStatus";
import styles from "./body.module.css";
import padloc from "../../Asset/Images/Padloc.svg"


const ActiveOrder = () => {
  const dispatch = useDispatch();
  const { activeOrder, profile } = useSelector(state => state.truckDriverOrders);


  useEffect(() => {
    activeOrder && dispatch(OrderDetails(activeOrder))
  }, [activeOrder]);


  return (
    <div className={style.Active_OrderSection} >

      <div className={style.Active__OrderContainer}>
        {profile && profile.accepted === "verified" ?
          <div>
            <div>
              <header className={style.Active__header}>
                <h5>Active Order</h5>
              </header>
              {
                activeOrder && typeof activeOrder !== "string" ? <div onClick={() => { activeOrder && dispatch(OrderDetails(activeOrder)); dispatch(orderModalStatus({ status: true })) }}>

                  <TDActiveOrderCard activeOrder={activeOrder} />

                </div> :
                  <Active />
              }
              <Open />
            </div>
            <div className={style.OrderDetails}>
              <OrderDetail />
            </div>
          </div> : <div className={styles.notVerified__container}>
            <div className={styles.notverified__padlock}>
              <img src={padloc} alt="Pad Lock" />
            </div>
            <div className={styles.notverified__content}>
              <h5> Your account has not been verified </h5>
              <p> Kindly wait while we verify your documents. Check back often.</p>
            </div>
          </div>}
      </div>
    </div>
  );
};

export default ActiveOrder;
