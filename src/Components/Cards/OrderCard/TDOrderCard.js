import React, { useState, useEffect } from "react";
import style from "../OrderCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getOneOpenOrder } from "../../../Store/Actions/truckDriverOrders";

const TDOrderCard = ({ status, details, index }) => {
  const [id, setId] = useState(0);
  const dispatch = useDispatch();

  const { openOrders } = useSelector(state => state.truckDriverOrders);


  useEffect(() => {
    openOrders && dispatch(getOneOpenOrder(openOrders && openOrders[0]._id));
  }, [openOrders.length !== 0]);

  const setOrder = () => {
    dispatch(getOneOpenOrder(openOrders && openOrders[index]._id))
    setId(index);
    console.log(id === index);
  }
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

  return openOrders.length !== 0 && (
    <div className={style.OrderCard__container}>
      <header className={style.OrderCard__header}>
        <div className={style.OrderCard__headertext} >
          <h5 onClick={setOrder} >ID {details._id}</h5>
          <p style={{ backgroundColor: ` ${status.color}` }}>{status.status}</p>
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
            <p>{details.pick_off_location}</p>
            <p>{details.drop_off_location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TDOrderCard;
