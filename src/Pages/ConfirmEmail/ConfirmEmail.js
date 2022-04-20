import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../Components/forms/button";
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
