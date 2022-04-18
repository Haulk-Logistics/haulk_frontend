/* Landing Page - Subscription Section */

import React from 'react';
import style from './Subscribe.module.css';
import subscribeImage from "../../Asset/Images/subscribeImage.jpg";
import subscribeBtn from "../../Asset/Icons/subscribeBtn.svg";

const Subscribe = (props) => {
  return (
    <div className={style.subContainer}>
      <div className={style.subInfo}>
        <div className={style.subMsg}>
          <h3>Want to know more about our services?</h3>
          <p>Subcribe to our Newsletter</p>
          <div className={style.subInput}>
            <input type="text" placeholder="Email Address" />
            <button type="submit" className={style.subscribeBtn}>
              <img src={subscribeBtn} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className={style.subImg}>
        <img src={subscribeImage} alt="Subscribe" />
      </div>
    </div>
  );
};

export default Subscribe;
