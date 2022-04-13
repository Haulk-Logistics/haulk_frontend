import React from "react";
import Forgotpassword from "../../Components/forms/forgotpassword";
import Wallpaper from "../../Components/forms/wallpaper";
import pagestyle from "./style.module.css";

const Forgotpasswordpage = () => {
  return (
    <div className={pagestyle.container}>
      <Wallpaper />
      <Forgotpassword />
    </div>
  );
};

export default Forgotpasswordpage;
