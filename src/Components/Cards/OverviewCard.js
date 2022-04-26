import React from "react";
import style from "./card.module.css";

const OverviewCard = ({ icon, color, heading, paragragh, currency }) => {
  const line = (
    <svg
      className={style.line}
      viewBox="0 0 82 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.00084 57.4698L22.4234 31.595L41.1244 37.9302L49.1565 14.2201L80.9955 1.55309"
        stroke={color}
        stroke-width="2.11552"
      />
    </svg>
  );
  return (
    <div className={style.overview}>
      <div className={style.icon} style={{ backgroundColor: `${color}` }}>
        {icon}
      </div>
      <div className={style.body}>
        {/* h1 for  card header and p for values*/}
        <div>
          <h1>{heading}</h1>
          <p>N{paragragh}</p>
        </div>
        <div className={style.line}>{line}</div>
      </div>
    </div>
  );
};

export default OverviewCard;
