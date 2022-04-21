import React from "react";
import { Link } from "react-router-dom";
import Formheader from "../../Components/forms/formheader";
import Wallpaper from "../../Components/forms/wallpaper";
import style from "./styles.module.css";

const EmailVerified = () => {
  return (
    <div className={style.render}>
      <div className={style.wallpaper}>
        <Wallpaper />
      </div>

      <div className={style.content}>
        <Formheader head="Account verification successful!" />
        <p>
          Your account has been successfully verified. Please click on{" "}
          <Link className={style.link} to="/login">
            {" "}
            Login{" "}
          </Link>{" "}
          to continue
        </p>
      </div>
    </div>
  );
};

export default EmailVerified;
