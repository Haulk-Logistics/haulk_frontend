import React, { useEffect } from "react";
import style from "./style.module.css";
import Dp from "../../Asset/Images/haulk-wallpaper.svg";
import { IoNotifications } from "react-icons/io5";
import logo from "../../Asset/logo/MobileLogo.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { truckDriverProfile } from "../../Store/Actions/truckDriverOrders";

const NavBar = () => {
  const { loading, profile } = useSelector((state) => state.truckDriverOrders);
  console.log(profile)
  console.log(profile && profile.userDetails && profile.userDetails.firstName)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(truckDriverProfile());
  }, []);
  return (
    <div className={style.nav__container}>
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
            <p>
              {loading
                ? "..."
                : profile &&
                  profile.userDetails && profile.userDetails.firstName + " " + profile.userDetails && profile.userDetails.lastName}
            </p>
            <small>
              {" "}
              {loading ? "..." : profile && profile.userDetails&& profile.userDetails.role}{" "}
            </small>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
