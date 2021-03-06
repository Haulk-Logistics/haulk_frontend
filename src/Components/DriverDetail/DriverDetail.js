import React, { useEffect } from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import AdminHeader from "../AdminHeader/AdminHeader";
import styles from "./DriverDetail.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { HiArrowLeft } from "react-icons/hi";
import { getOneDriver } from "../../Store/Actions/Admin";

const DriverDetail = () => {
    const { oneDriver } = useSelector(state => state.admin)
    console.log(oneDriver && oneDriver);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.pathname.split("/")[2]
    useEffect(() => {
        console.log(id)
        dispatch(getOneDriver(id))
    }, [id])
    return (
        <div className = {`${styles["dashboard"]} container`}>
            <AdminNavbar />
            <div className = {`${styles["dashboard-request"]}`}>
                <AdminHeader />
                <div className={styles.request}>
                    <div className={`${styles["request-heading"]}`}>
                        <HiArrowLeft onClick={() => navigate("/admin-driver")} />
                        <h4>Request Details</h4>
                    </div>
                    <div className={`${styles["request-main"]}`}>
                        <ul>
                            <li>
                                <p>Name</p>
                                <p>{oneDriver && oneDriver.userDetails.firstName} {oneDriver && oneDriver.userDetails.lastName}</p>
                            </li>
                            <li>
                                <p>Phone Number</p>
                                <p>{oneDriver && oneDriver.userDetails.phoneNumber}</p>
                            </li>
                            <li>
                                <p>Email Address</p>
                                <p>{oneDriver && oneDriver.userDetails.email}</p>
                            </li>
                            <li>
                                <p>Driver's Image</p>
                                <p>
                                    <a target="_blank" href={oneDriver && oneDriver.truckDetails.driver_image} className={styles.link}>Click to view</a>
                                </p>
                            </li>
                            <li>
                                <p>Driver's License</p>
                                <p>
                                    <a target="_blank" href={oneDriver && oneDriver.truckDetails.driver_license_image} className={styles.link}>Click to view</a>
                                </p>
                            </li>
                            <li>
                                <p>Vehicle's License</p>
                                <p>
                                    <a target="_blank" href={oneDriver && oneDriver.truckDetails.vehicle_license_image} className={styles.link}>Click to view</a>
                                </p>
                            </li>
                            <li>
                                <p>License Plate Number</p>
                                <p>{oneDriver && oneDriver.truckDetails.licence_plate_number}</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p>Truck Type</p>
                                <p>{oneDriver && oneDriver.truckDetails.truck_type.charAt(0).toUpperCase() + oneDriver.truckDetails.truck_type.slice(1)}</p>
                            </li>
                            <li>
                                <p>Truck Size</p>
                                <p>{oneDriver && oneDriver.truckDetails.truck_size}</p>
                            </li>
                            <li>
                                <p>Truck Image</p>
                                <p><a target="_blank" href={oneDriver && oneDriver.truckDetails.truck_image} className={styles.link}>Click to view</a></p>
                            </li>
                            <li>
                                <p>Transit Goods License</p>
                                <p><a target="_blank" href={oneDriver && oneDriver.truckDetails.transit_goods_license_image} className={styles.link}>Click to view</a></p>
                            </li>
                            <li>
                                <p>Port Pass</p>
                                <p><a target="_blank" href={oneDriver && oneDriver.truckDetails.port_passes_image} className={styles.link}>Click to view</a></p>
                            </li>
                            <li>
                                <p>Certificate of Insurance</p>
                                <p><a target="_blank" href={oneDriver && oneDriver.truckDetails.certificate_of_insurance_image} className={styles.link}>Click to view</a></p>
                            </li>
                            <li>
                                <p>Certificate of Road Worthiness</p>
                                <p><a target="_blank" href={oneDriver && oneDriver.truckDetails.certificate_of_road_worthiness_image} className={styles.link}>Click to view</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default DriverDetail;