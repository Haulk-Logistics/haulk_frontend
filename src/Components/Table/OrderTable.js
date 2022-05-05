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
          {content && content.map((body, index) => (

            <tr >
              <td className={style.OrderTable__td}>
                <p>{body._id}</p>
              </td>
              <td className={style.OrderTable__td}>
                <p>{body.pick_up_date}</p>
              </td>
              <td className={style.OrderTable__td}>
                <p
                  style={
                    body.order_status === "processing" ? { background: "var( --default)" } :
                      body.order_status === "pending" ? { background: "var( --default)" } :
                        body.order_status === "accepted" ? { background: "var( --warning)" } :
                          body.order_status === "picked_up" ? { background: "var(--info-links )" } :
                            body.order_status === "in_transit" ? { background: "var(--surface-success)" } :
                              body.order_status === "dropped_off" ? { background: "var( --success)" } : { background: "orange" }

                  }>{body.order_status}</p>
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
            orderStatus={body.order_status === "processing" ? { color: "var( --default)", status: "Processing" } :
              body.order_status === "pending" ? { color: "var(--default)", status: "Pending" } :
                body.order_status === "accepted" ? { color: "var( --warning)", status: "Accepted" } :
                  body.order_status === "picked_up" ? { color: "var(--info-links )", status: "Picked up" } :
                    body.order_status === "in_transit" ? { color: "var(--surface-success)", status: "In Transit" } :
                      body.order_status === "dropped_off" ? { color: "var( --success)", status: "Completed" } :
                        { color: "white" }}
            contentTitle1="Trucktype "
            content1={body.truck_type}
          />
        </div>
      ))}
    </div>
  );
};

export default OrderTable;
