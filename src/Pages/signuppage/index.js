import React from "react";
import Signup from "../../Components/forms/signup";
import Wallpaper from "../../Components/forms/wallpaper";
import Modal from "../../Components/Modal/Modal";
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
