import React from "react";
import style from "../OrderCard.module.css";



const TDActiveOrderCard = ({ activeOrder }) => {
  const locationStepper = (
    <svg
      width="10"
      height="43"
      viewBox="0 0 10 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="5" cy="5" r="5" fill="#1692AD" />
      <circle cx="5" cy="38" r="5" fill="#1692AD" />
      <line x1="5" y1="35.0098" x2="5" y2="8.99054" stroke="#1692AD" />
    </svg>
  );

  return (
    <div className={style.OrderCard__container}  >
      <header className={style.OrderCard__header}>
        <div className={style.OrderCard__headertext} >
          <h5>ID {activeOrder && activeOrder._id}</h5>
          <p style={
            activeOrder.order_status === "processing" ? { background: "var( --default)" } :
              activeOrder.order_status === "pending" ? { background: "var( --default)" } :
                activeOrder.order_status === "accepted" ? { background: "var( --warning)" } :
                  activeOrder.order_status === "picked_up" ? { background: "var(--info-links )" } :
                    activeOrder.order_status === "in_transit" ? { background: "var(--surface-success)" } :
                      activeOrder.order_status === "dropped_off" ? { background: "var( --success)" } : { background: "orange" }

          }>{activeOrder && activeOrder.order_status === "processing" ? "Processing" :
            activeOrder.order_status === "pending" ? "Pending" :
              activeOrder.order_status === "accepted" ? "Accepted" :
                activeOrder.order_status === "picked_up" ? "Picked up" :
                  activeOrder.order_status === "in_transit" ? "In transit" :
                    activeOrder.order_status === "dropped_off" ? "Completed" : ""}</p>
        </div>
        <h6>consignment</h6>
      </header>
      <div className={style.OrderCard__body}>
        <div className={style.OrderCard__date}>
          <p>Pick-up</p>
          <p>Drop-off</p>
        </div>

        <div className={style.OrderCard__details}>
          {locationStepper}
          <div>
            {" "}
            <p>{activeOrder && activeOrder.pick_off_location}</p>
            <p>{activeOrder && activeOrder.drop_off_location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TDActiveOrderCard;
