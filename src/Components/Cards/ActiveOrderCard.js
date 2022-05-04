import React, {useEffect} from "react";
import style from "./card.module.css";
import { useSelector, useDispatch } from "react-redux";
import { truckDriverActiveOrder } from "../../Store/Actions/truckDriverOrders";

const ActiveOrderCard = () => {
  useEffect(() => {
    dispatch(truckDriverActiveOrder())
  },[])
  const dispatch = useDispatch();
  const { activeOrder, loading } = useSelector(state => state.truckDriverOrders);
  console.log(activeOrder)
  const step = (
    <svg
      width="10"
      height="50"
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
    <div className={style.fullcard}>
      <div className={style.header}>
        <h5>Active Order</h5>
        <p>{ loading ? "..." : activeOrder && activeOrder.order_status}</p>
      </div>
      <div className={style.fullcardbody}>
        <div className={style.column1}>
          <h5>ID {loading ? "..." : activeOrder && `${activeOrder._id.substr(0,4)}...${activeOrder._id.substr(activeOrder._id.length - 5, activeOrder._id.length - 1 )}`}</h5>
          <small> Consignment </small>
        </div>
        <div className={style.column2}>
          <div className={style.date}>
            <p>Pick-up</p>
            <p>Drop-off</p>
          </div>
          <div className={style.destination}>
            {step}
            <section>
              <p>{ loading ? "..." : activeOrder && activeOrder.pick_off_location}</p>
              <p>{ loading ? "..." : activeOrder && activeOrder.drop_off_location}</p>
            </section>
          </div>
        </div>
        <div className={style.column3}>
          <p>Cargo Owner Number:</p>
          <small> 0903 354 6898 </small>
        </div>
        <div className={style.column4}>
          <p>Request Date: </p>
          <small> { loading ? "..." : activeOrder && activeOrder.pick_up_date} </small>
        </div>
      </div>
    </div>
  );
};

export default ActiveOrderCard;
