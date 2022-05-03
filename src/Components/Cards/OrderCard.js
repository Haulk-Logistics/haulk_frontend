import React from "react";
import style from "./OrderCard.module.css";


const OrderCard = ({ status, details }) => {
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
    <div className={style.OrderCard__container}>
      <header className={style.OrderCard__header}>
        <div>
          <h5>ID {details._id}</h5>
          <h6>consignment</h6>
        </div>
        <p style={{ backgroundColor: ` ${status.color}` }}>{status.status}</p>
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
            <p>{details.pick_off_location}</p>
            <p>{details.drop_off_location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
