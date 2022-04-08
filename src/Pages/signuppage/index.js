import React from "react";
import Signup from "../../Components/signup";
import Wallpaper from "../../Components/signup/wallpaper";
import signupstyle from "./styles.module.css";

const SignupPage = () => {
  return (
    <div className={signupstyle.render}>
      <Wallpaper />
      <Signup />
    </div>
  );
};

export default SignupPage;
