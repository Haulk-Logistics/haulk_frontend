import React from "react";
import { useSelector } from "react-redux";
import Signup from "../../Components/forms/signup";
import Truckdetail2 from "../../Components/forms/truckdetail2";
import Truckdetails1 from "../../Components/forms/truckdetails1";
import Wallpaper from "../../Components/forms/wallpaper";
import signupstyle from "./styles.module.css";

const SignupPage = () => {
  const pageno = useSelector((state) => state.step);
  const usertype = useSelector((state) => state.status);

  return (
    <div className={signupstyle.render}>
      <Wallpaper />
      {pageno === 0 ? (
        <Signup />
      ) : pageno === 1 && usertype === "truckdriver" ? (
        <Truckdetails1 />
      ) : pageno === 2 && usertype === "truckdriver" ? (
        <Truckdetail2 />
      ) : (
        <Signup />
      )}
    </div>
  );
};

export default SignupPage;
