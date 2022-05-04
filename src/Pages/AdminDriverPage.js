
import React from "react";

import AdminNavbar from "../Components/AdminNavbar/AdminNavbar"
import AdminDriver from "../Components/AdminDriver/AdminDriver";

const AdminDriverPage = () => {
    return (
        <div style = {{display:'flex'}} className = "container"> 
            <AdminNavbar/>
            <AdminDriver/>
        </div>
    );
}
 
export default AdminDriverPage;