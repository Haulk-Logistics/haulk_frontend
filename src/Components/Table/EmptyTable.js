import React from "react";
import style from "./style.module.css";
import empty from "../../Asset/Images/NoContent.svg"

const EmptyTable = ({ title, header, content }) => {
    return (
        <div className={style.table__container}>
            <div className={style.table_head}>
                {" "}
                <h4>{title}</h4>
            </div>
            <div className={style.Emptytable__main}>
                <div className={style.Empty_table}>
                    <img src={empty} alt="Empty" />
                    <div>
                        <h5>{header}</h5>
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmptyTable;
