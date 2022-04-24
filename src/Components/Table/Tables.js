import React from "react";
import style from "./style.module.css";

const Tables = ({ title, header, content }) => {
  return (
    <div className={style.table__container}>
      <div className={style.table_head}>
        {" "}
        <h4>{title}</h4>
      </div>
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
            {body.map((values, idx) => (
              <td>
                {" "}
                <p>{values}</p>
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Tables;
