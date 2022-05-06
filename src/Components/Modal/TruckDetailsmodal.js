import React from 'react'
import style from "../TruckDriver/ActiveOrder.module.css";
import Modal from 'react-modal';
import modal from "./Modal.module.css";
import { useDispatch, useSelector } from "react-redux"
import { Dropdown } from "../Input";
import { useForm } from "react-hook-form";
import { truckDriverAcceptOrder } from "../../Store/Actions/truckDriverOrders";
import { orderModalStatus } from '../../Store/Actions/ModalStatus';
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const TruckDetailsmodal = ({ natureOfGoods, pickupLoc, dropoffLoc, amount, shippingLine, containerNo, pickupDate }) => {
    const status = useSelector((state) => state.modalStatus);
    const dispatch = useDispatch();


    console.log("imhere")
    const CloseModal = () => {
        dispatch(orderModalStatus({ status: false }));
    };


    const { loading, acceptOrder, activeOrder, error } = useSelector(state => state.truckDriverOrders);
    const oneOpenOrder = useSelector((state) => state.orderdetail)
    const schema = yup.object().shape({
        status: yup.string().required(""),
    });



    const { register, handleSubmit } = useForm({
        mode: "onTouched",
        resolver: yupResolver(schema),
        defaultValues: activeOrder && {
            status: `${activeOrder.order_status}`,
        },
    });





    const orderAccept = (id) => {
        const ans = window.confirm("Are u sure u want to accept this order");
        if (ans) {
            dispatch(truckDriverAcceptOrder(id))
        }
        return
    }



    const onsubmit = async (data) => {
        const token = localStorage.getItem("haulk-app-auth") && JSON.parse(localStorage.getItem("haulk-app-auth"));
        const updateURL = `https://haulk.herokuapp.com/api/driver/update_order_status/${oneOpenOrder.id}`


        await axios({
            method: "put",
            url: updateURL,
            headers: { Authorization: `Bearer ${token}` },
            data: data,
        }).then((result) => {
            dispatch({
                type: "success",
                payload: {
                    title: "Successful!",
                    message: result.message
                },
            });
        }).catch((error) => {
            dispatch({
                type: "error",
                payload: {
                    title: "Error!",
                    message: error.response
                        ? error.response.data.message
                        : "Network Error",
                },
            });
        })


    }


    return window.innerWidth <= 640 && (
        <Modal
            isOpen={status.orderStatus.status}
            ariaHideApp={false}
            closeTimeoutMS={200}
            style={{
                overlay: {
                    backgroundColor: "rgba(0,0,0,0.25)",

                },
                content: {
                    background: "none",
                    border: "none",
                    inset: "0"
                }
            }}
        >
            <div className={modal.container} style={{ width: "90vw", padding: "0" }}>
                <div className={modal.header} style={{ padding: "1rem 0 .5rem 2rem" }}>
                    <h5 style={{ fontWeight: "500" }}>Order Details </h5>
                    <button onClick={CloseModal}>
                        <AiOutlineClose />
                    </button>
                </div>
                <div className={modal.body} style={{ display: "block" }}>
                    <div className={style.DetailSection}>
                        <p className={style.DetailSection__status}>{oneOpenOrder && oneOpenOrder.order_status}</p>
                        <div>
                            {activeOrder && (typeof activeOrder !== "string" && oneOpenOrder.orderStatus === "accepted" || oneOpenOrder.orderStatus === "in_transit" || oneOpenOrder.orderStatus === "picked_up") ?
                                <div className={style.StatusForm}>
                                    <form onChange={handleSubmit(onsubmit)}>
                                        <label htmlFor="status">Order Status Update</label>
                                        <Dropdown
                                            className={style.label}
                                            name="status"
                                            id="status"
                                            register={register}
                                            option={[
                                                { value: "", optionlabel: "update status" },
                                                { value: "accepted", optionlabel: "Accepted" },
                                                { value: "picked_up", optionlabel: "Items Picked" },
                                                { value: "in_transit", optionlabel: "In Transit" },
                                                { value: "dropped_off", optionlabel: "Arrived" },
                                            ]}
                                        />
                                        <p>Update the status of you order here</p>
                                    </form>
                                </div> : <div></div>}
                        </div>
                        {acceptOrder && <span style={{ color: "green" }}>{acceptOrder}</span>}
                        {error && <span style={{ color: "red" }} >{error}</span>}
                        <div className={style.DetailSection__details}>
                            <div>
                                <h5> Nature of goods</h5> <p>{natureOfGoods}</p>
                            </div>
                            <div>
                                <h5> Pickup Location</h5> <p>{pickupLoc}</p>
                            </div>
                            <div>
                                <h5> Drop Off Location</h5> <p> {dropoffLoc} </p>
                            </div>
                            <div>
                                <h5> Pick Up Date</h5> <p> {pickupDate} </p>
                            </div>
                            <div>
                                <h5>Container No</h5> <p>{containerNo}</p>
                            </div>
                            <div>
                                <h5> Shipping Line</h5> <p> {shippingLine} </p>
                            </div>
                            <div>
                                <h5> Pay</h5> <p>{amount}</p>
                            </div>

                            {activeOrder && typeof activeOrder === "string" ? <button className={style.DetailSection__button}
                                onClick={() => { orderAccept(oneOpenOrder.id); dispatch(orderModalStatus({ status: false })) }} >{loading ? "Processing..." : "Accept Order"}</button> : ""}
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default TruckDetailsmodal;