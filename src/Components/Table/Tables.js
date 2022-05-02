import React from "react";
import MobileOrderCards from "../Cards/MobileOrderCards";
import style from "./style.module.css";

const Tables = ({ title, header, content }) => {
  return (
    <div className={style.table__container}>
      <div className={style.table_head}>
        {" "}
        <h4>{title}</h4>
      </div>
      <div className={style.table__main}>
        <table>
          {/* header of the table*/}
          <tr>{header && header.map((head, index) => <th>{head}</th>)}</tr>

          {/* content of the table*/}
          {content && typeof content == "object" ? (
            content.map((body, index) => (
              <tr>
                <td>
                  <p>{body._id}</p>
                </td>
                <td>
                  <p>{body.pick_up_date}</p>
                </td>
                <td>
                  <p>{body.order_status}</p>
                </td>
                <td>
                  <p>{body.truck_type}</p>
                </td>
                <td>
                  <button>...</button>
                </td>
              </tr>
            ))
          ) : (
            <div>{content}</div>
          )}
        </table>
      </div>
      <div className={style.mobileTable}>
        {content && typeof content == "object" ? (content.map((body, index) => (
          <MobileOrderCards
            Id={body._id}
            pickupdate={body.pick_up_date}
            orderStatus={body[2]}
            contentTitle1="Truck type"
            content1={body.truck_type}
          />
        ))) : <div style={{ background: "white", padding: "1rem" }}>{content}</div>}
      </div>
    </div>
  );
};

export default Tables;
