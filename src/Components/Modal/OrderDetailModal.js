import React from 'react'
import style from "../../Components/CargoOwner/ActiveOrder.module.css";
import dummy from "../../Asset/Images/contactUsImage.svg"
import VerticalStepper from "../Stepper/VerticalStepper";
import Modal from 'react-modal';
import modal from "./Modal.module.css";
import { useDispatch, useSelector } from "react-redux"
import { orderModalStatus } from '../../Store/Actions/ModalStatus';
import { AiOutlineClose } from "react-icons/ai";
import emptyImage from "../../Asset/Images/emptystate.svg"

const OrderDetailModal = ({ natureOfGoods, pickupLoc, dropoffLoc, amount, driver }) => {
    const status = useSelector((state) => state.modalStatus);
    const dispatch = useDispatch();

    const CloseModal = () => {
        dispatch(orderModalStatus({ status: false }));
    };


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
                    <div className={style.cargoDetailSection} style={{ borderRadius: "0  0 10px 10px" }}>
                        {   /* <h5 className={style.cargoDetailSection__status}></h5>*/}
                        <div className={style.StatusForm}>
                            <div className={style.DetailSection__Driver}>
                                {driver ?
                                    <div className={style.DetailSection__driversProfile}>
                                        <div className={style.driverprofile__img}>
                                            <img src={dummy} alt=" of Driver " />
                                        </div>
                                        <div className={style.driverprofile__bio}>
                                            <h5>Ola Deji </h5>
                                            <p className={style.orderdetail__p}>Mobile No: <span>08149173943</span></p>
                                        </div>
                                    </div>
                                    :
                                    <div className={style.noDriver}>
                                        <img src={emptyImage} alt="No Driver Yet" />
                                        <p>A driver will be assigned to you shortly</p>
                                    </div>
                                }
                            </div>
                            <div className={style.Order__Tracking}>
                                <VerticalStepper />
                            </div>
                        </div>
                        <div className={style.cargoDetailSection__details}>
                            <div>
                                <h5> Nature of goods</h5> <p> {natureOfGoods} </p>
                            </div>
                            <div>
                                <h5> Pickup Location</h5> <p> {pickupLoc}</p>
                            </div>
                            <div>
                                <h5> Drop Off Location</h5> <p> {dropoffLoc} </p>
                            </div>
                            <div>
                                <h5> Amount</h5> <p>{amount}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default OrderDetailModal