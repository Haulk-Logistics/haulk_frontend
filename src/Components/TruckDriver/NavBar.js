import React from "react";
import style from "./style.module.css";
import Dp from "../../Asset/Images/haulk-wallpaper.svg";
import { IoNotifications } from "react-icons/io5";
import logo from "../../Asset/logo/MobileLogo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <React.Fragment>
      <nav className={style.nav}>
        <div className={style.mobileview}>
          <Link to="/home">
            <img src={logo} alt="Haulk" />
          </Link>
        </div>
        <div className={style.notification}>
          <IoNotifications size="24px" />
        </div>
        <div className={style.profile}>
          <img src={Dp} alt="profile" />
          <div className={style.name}>
            <p>Nweze Chidera</p>
            <small>Admin</small>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
