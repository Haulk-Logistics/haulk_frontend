import React from "react";
import ConfirmEmail from "../../Components/forms/ConfirmEmail";
import Wallpaper from "../../Components/forms/wallpaper";
import style from "./styles.module.css";

const ConfirmEmailPage = () => {
  return (
    <div className={style.container}>
      <Wallpaper />
      <ConfirmEmail />
    </div>
  );
};

export default ConfirmEmailPage;
