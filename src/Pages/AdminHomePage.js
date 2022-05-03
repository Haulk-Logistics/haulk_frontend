
import React from "react";

import AdminNavbar from "../Components/AdminNavbar/AdminNavbar";
import AdminHome from "../Components/AdminHome/AdminHome";

const AdminHomePage = () => {

    return (
        <div style={{display:'flex'}}>
            <AdminNavbar/>
            <AdminHome/>
        </div>
    );
}
 
export default AdminHomePage;