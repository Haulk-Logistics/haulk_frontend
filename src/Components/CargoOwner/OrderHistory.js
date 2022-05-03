import React from "react";
import Tables from "../Table/Tables";
import style from "./OrderHistory.module.css";

const OrderHistory = () => {
  return (
    <div className={style.OrderHistory__container}>
      <Tables
        title="Order History"
        header={[
          "ID",
          "Date Requested",
          "Status",
          "Drop Location",
          "Arrival Date",
        ]}
        content={[
          ["814567", "23 Apr 2022", "Complete", "Lagos port", "26 Apr 2022"],
          ["814567", "23 Apr 2022", "Complete", "Lagos port", "26 Apr 2022"],
          ["814567", "23 Apr 2022", "Complete", "Lagos port", "26 Apr 2022"],
          ["814567", "23 Apr 2022", "Complete", "Lagos port", "26 Apr 2022"],
          ["814567", "23 Apr 2022", "Complete", "Lagos port", "26 Apr 2022"],
          ["814567", "23 Apr 2022", "Complete", "Lagos port", "26 Apr 2022"],
        ]}
      />
    </div>
  );
};

export default OrderHistory;
