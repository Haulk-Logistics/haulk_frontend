import React from "react";
import style from "./MobileOrderCards.module.css";

const MobileOrderCards = ({
  Id,
  pickupdate,
  orderStatus,
  contentTitle1,
  contentTitle2,
  content1,
  content2,
}) => {
  return (
    <div className={style.MobileOrderCards__container}>
      <div className={style.MobileOrderCards__header}>
        <div className={style.MobileOrderCards__Id}>
          <h5>{Id}</h5>
          <p>{pickupdate}</p>
        </div>
        <p className={style.MobileOrderCards__status}>{orderStatus}</p>
      </div>
      <div>
        <div className={style.MobileOrderCards__content}>
          <h5>{contentTitle1}</h5>
          <p>{content1}</p>
        </div>
        <div className={style.MobileOrderCards__content}>
          <h5>{contentTitle2}</h5>
          <p>{content2}</p>
        </div>
      </div>
    </div>
  );
};

export default MobileOrderCards;
