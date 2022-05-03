import React from "react";

import styles from "./AwaitingTable.module.css";


const AwaitingTable = (props) => {
    let arr = [
        {
            name: "Okafor Sunday",
            email: "okaforsun@gmail.com",
            registered: "22 Dec., 2021.",
            truck: "Mini Truck"
        },{
            name: "Edozie Anadi",
            email: "phynnedo@gmail.com",
            registered: "21 Jan., 2022.",
            truck: "Refrigerated Truck"
        },{
            name: "Jack Harlow",
            email: "harlow@gmail.com",
            registered: "23 Apr., 2022.",
            truck: "Truck Head"
        }, {
            name: "Nweze Chidera",
            email: "nwezechidera@gmail.com",
            registered: "23 Apr., 2022.",
            truck: "Flat Bed"
        }
    ]


    return (
        <table>
            <thead className = {`${styles["pre-table"]}`}>
                <tr>
                    <td>Name</td>
                    <td>Email Address</td>
                    <td>Registered</td>
                    <td>Truck Type</td>
                    <td>Action</td>
                    <td>&nbsp;</td>
                    <td>Details</td>
                </tr>
            </thead>
            {arr.map((person, index) => (
                <tr key = {index} className = {`${styles["pre-body"]}`}>
                    <td>{person.name}</td>
                    <td>{person.email}</td>
                    <td>{person.registered}</td>
                    <td>{person.truck}</td>
                    <td><button className = {styles.primaryBtn} onClick = {props.approveModal}>Approve</button></td>
                    <td><button className = {styles.secondaryBtn} onClick = {props.rejectModal}>Reject</button></td>
                    <td className = {styles.dots}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </td>
                </tr>
            ))}
        </table>
    );
}
 
export default AwaitingTable;