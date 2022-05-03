import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import emptyImage from "../../Asset/Images/emptystate.svg"
import style from "./OrderEmpty.module.css"


const OrderEmptyState = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation();
    const path = pathname.split("/");

    return (
        <div className={style.OrderEmpty__container}>
            <div className={style.OrderEmpty__content}>
                <img src={emptyImage} alt="Empty" />
                <div className={style.OrderEmpty__writeup} >
                    <h5>You have no active order</h5>
                    <p>The details of an order will be displayed here</p>
                </div>
                <button className={style.OrderEmpty__button} onClick={() => { navigate(`/${path[1]}/truck-request`) }} >Book a truck now</button>
            </div>
        </div>
    )
}

export default OrderEmptyState