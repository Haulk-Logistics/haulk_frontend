import React from "react";
import { useSelector } from "react-redux";
import Signup from "../../Components/forms/signup";
import Truckdetail2 from "../../Components/forms/truckdetail2";
import Truckdetails1 from "../../Components/forms/truckdetails1";
import Wallpaper from "../../Components/forms/wallpaper";
import signupstyle from "./styles.module.css";

const SignupPage = () => {
  const pageno = useSelector((state) => state.step);

  return (
    <div className={signupstyle.render}>
      <Wallpaper />
      {pageno === 0 ? (
        <Signup />
      ) : pageno === 1 ? (
        <Truckdetails1 />
      ) : (
        <Truckdetail2 />
      )}
    </div>
  );
};

export default SignupPage;
