import React from "react";
import styles from "./DriverDetail.module.css";

import { HiArrowLeft } from "react-icons/hi";

const DriverDetail = ({hideDetails}) => {
    let link = "#"

    return (
        <div className = {styles.request}>
            <div className = {`${styles["request-heading"]}`}>
                <HiArrowLeft onClick = {hideDetails}/>
                <h4>Request Details</h4>
            </div>
            <div className = {`${styles["request-main"]}`}>
                <ul>
                    <li>
                        <p>Name</p>
                        <p>Jigamu Nonso</p>
                    </li>
                    <li>
                        <p>Phone Number</p>
                        <p>09078392342</p>
                    </li>
                    <li>
                        <p>Email Address</p>
                        <p>mirabeljohnson@gmail.com</p>
                    </li>
                    <li>
                        <p>Driver's Image</p>
                        <p>
                            <a href={link} className = {styles.link}>Click to view</a>
                        </p>
                    </li>
                    <li>
                        <p>Driver's License</p>
                        <p>
                            <a href={link} className = {styles.link}>Click to view</a>
                        </p>
                    </li>
                    <li>
                        <p>Vehicle's License</p>
                        <p>
                            <a href={link} className = {styles.link}>Click to view</a>
                        </p>
                    </li>
                    <li>
                        <p>License Plate Number</p>
                        <p>HLK234TL</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <p>Truck Type</p>
                        <p>Flat Bed</p>
                    </li>
                    <li>
                        <p>Truck Size</p>
                        <p>24-Foot, Three-Axle Truck</p>
                    </li>
                    <li>
                        <p>Truck Image</p>
                        <p><a href={link} className = {styles.link}>Click to view</a></p>
                    </li>
                    <li>
                        <p>Transit Goods License</p>
                        <p><a href={link} className = {styles.link}>Click to view</a></p>
                    </li>
                    <li>
                        <p>Port Pass</p>
                        <p><a href={link} className = {styles.link}>Click to view</a></p>
                    </li>
                    <li>
                        <p>Certificate of Insurance</p>
                        <p><a href={link} className = {styles.link}>Click to view</a></p>
                    </li>
                    <li>
                        <p>Certificate of Road Worthiness</p>
                        <p><a href={link} className = {styles.link}>Click to view</a></p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default DriverDetail;