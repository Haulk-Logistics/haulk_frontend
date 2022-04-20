import React from "react";
import Resetpassword from "../../Components/forms/resetpassword";
import Wallpaper from "../../Components/forms/wallpaper";
import pagestyle from "./style.module.css";

const Resetpasswordpage = () => {
  return (
    <div className={pagestyle.container}>
      <Wallpaper />
      <Resetpassword />
    </div>
  );
};

export default Resetpasswordpage;
