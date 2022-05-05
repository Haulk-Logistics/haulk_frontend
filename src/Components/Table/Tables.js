import React from "react";
import MobileOrderCards from "../Cards/MobileOrderCards";
import EmptyActive from "../TruckDriver/EmptyActive";
import style from "./style.module.css";

const Tables = ({ title, header, content }) => {

  return (
    <div className={style.table__container}>
      <div className={style.table_head}>
        {" "}
        <h4>{title}</h4>
      </div>
      <div className={style.table__main}>
        {content && typeof content == "object" ? (
          <table>
            {/* header of the table*/}
            <tr>{header && header.map((head, index) => <th>{head}</th>)}</tr>

            {/* content of the table*/}
            {/* {content && typeof content == "object" ? ( */}
            {content.map((body, index) => (
              <tr>
                <td>
                  <p>{body._id}</p>
                </td>
                <td>
                  <p>{body.pick_up_date}</p>
                </td>
                <td>
                  <p style={
                    body.order_status === "processing" ? { background: "var( --default)" } :
                      body.order_status === "pending" ? { background: "var( --default)" } :
                        body.order_status === "accepted" ? { background: "var( --warning)" } :
                          body.order_status === "picked_up" ? { background: "var(--info-links )" } :
                            body.order_status === "in_transit" ? { background: "var(--surface-success)" } :
                              body.order_status === "dropped_off" ? { background: "var( --success)" } : { background: "orange" }

                  }>{body.order_status === "processing" ? "Processing" :
                    body.order_status === "pending" ? "Pending" :
                      body.order_status === "accepted" ? "Accepted" :
                        body.order_status === "picked_up" ? "Picked up" :
                          body.order_status === "in_transit" ? "In transit" :
                            body.order_status === "dropped_off" ? "Completed" : ""}</p>
                </td>
                <td>
                  <p>{body.truck_type}</p>
                </td>
                <td>
                  <p>{body.drop_off_location}</p>
                </td>
              </tr>
            ))}
          </table>
        ) : <div> <EmptyActive message={content} /> </div>}
      </div>
      <div className={style.mobileTable}>
        {content && typeof content == "object" ? (content.map((body, index) => (
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
            contentTitle1="Truck type"
            content1={body.truck_type}
          />
        ))) : <div style={{ background: "white", padding: "1rem" }}>{content}</div>}
      </div>
    </div>
  );
};

export default Tables;
