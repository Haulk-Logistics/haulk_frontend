import React from "react";
import MobileOrderCards from "../Cards/MobileOrderCards";
import style from "./style.module.css";
import ellipses from "../../Asset/Icons/ellipses.svg";

const OrderTable = ({ title, header, content }) => {
  return (
    <div className={style.OrderTable__container}>
      <div className={style.table_head}>
        {" "}
        <h4>{title}</h4>
      </div>
      <div className={style.table__main}>
        <table>
          {/* header of the table*/}
          <tr>
            {header && header.map((head, index) => (
              <th>{head}</th>
            ))}
          </tr>

          {/* content of the table*/}
          {content &&  content.map((body, index) => (
            <tr>
              <td className={style.OrderTable__td}>
                <p>{body._id}</p>
              </td>
              <td className={style.OrderTable__td}>
                <p>{body.pick_up_date}</p>
              </td>
              <td className={style.OrderTable__td}>
                <p>{body.order_status}</p>
              </td>
              <td className={style.OrderTable__td}>
                <p>{body.truck_type}</p>
              </td>
              <td className={style.OrderTable__td}>
                <button className={style.OrderTable__button}>
                  <img src={ellipses} alt="..." />
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
      {content.map((body, index) => (
        <div className={style.mobileTable}>
          <MobileOrderCards
            Id={body._id}
            pickupdate={body.pick_up_date}
            orderStatus={body.order_status}
            contentTitle1="Trucktype "
            content1={body.truck_type}
          />
        </div>
      ))}
    </div>
  );
};

export default OrderTable;
