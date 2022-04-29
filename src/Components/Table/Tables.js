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
          <tr>
            {header.map((head, index) => (
              <th>{head}</th>
            ))}
          </tr>

          {/* content of the table*/}
          {content.map((body, index) => (
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
          ))}
        </table>
      </div>
      {content.map((body, index) => (
        <div className={style.mobileTable}>
          <MobileOrderCards
            Id={body[0]}
            pickupdate={body[1]}
            orderStatus={body[2]}
            contentTitle1="Dropoff "
            content1={body[3]}
          />
        </div>
      ))}
    </div>
  );
};

export default Tables;
