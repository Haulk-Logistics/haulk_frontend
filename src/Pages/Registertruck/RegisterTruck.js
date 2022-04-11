import React from "react";
import { connect } from "react-redux";
import Formnav from "../../Components/forms/formnav";
import Truckdetailcont from "../../Components/forms/truckdetail2";
import Truckdetails from "../../Components/forms/truckdetails1";
import regstyle from "./style.module.css";

const RegisterTruck = (props) => {
  return (
    <div>
      <Formnav />
      <div className={regstyle.reg}>
        {Object.keys(props.truckdetails).length < 1 ? (
          <Truckdetails />
        ) : (
          <Truckdetailcont />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  truckdetails: state.truck,
});

export default connect(mapStateToProps)(RegisterTruck);
