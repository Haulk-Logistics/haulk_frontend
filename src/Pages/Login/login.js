import React from "react";
import Loginform from "../../Components/forms/login";
import Wallpaper from "../../Components/forms/wallpaper";
import pagestyle from "./style.module.css";

const Loginpage = () => {
  return (
    <div className={pagestyle.container}>
      <Wallpaper />
      <Loginform />
    </div>
  );
};

export default Loginpage;
