import React from "react";
import Formnav from "../../Components/forms/formnav";
import Loginform from "../../Components/forms/login";
import loginstyle from "./style.module.css";

const Adminlogin = () => {
  return (
    <div>
      <Formnav />
      <div className={loginstyle.container}>
        <div>
          <Loginform user="admin" />
        </div>
      </div>
    </div>
  );
};

export default Adminlogin;
