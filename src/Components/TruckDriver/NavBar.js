import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import Dp from "../../Asset/Icons/profileIcon.svg";
import logo from "../../Asset/logo/MobileLogo.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { truckDriverProfile } from "../../Store/Actions/truckDriverOrders";
import { useNavigate } from "react-router";
import { IoLogOut } from "react-icons/io5";

const NavBar = () => {
  const [toggle, setToggle] = useState("none")
  const navigate = useNavigate()
  const { profile } = useSelector((state) => state.truckDriverOrders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(truckDriverProfile());
  }, []);


  const capitalizeFirstLetter = (string) => {
    const firstletter = string.slice(0, 1);
    const newWord = firstletter.toUpperCase() + string.slice(1)
    return newWord
  }

  const firstName = profile && capitalizeFirstLetter(profile.userDetails.firstName)
  const lastName = profile && capitalizeFirstLetter(profile.userDetails.lastName)

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/login");
  }


  return (
    <div className={style.nav__container}>
      <nav className={style.nav}>
        <div className={style.mobileview}>
          <Link to="/home">
            <img src={logo} alt="Haulk" />
          </Link>
        </div>
        <div className={style.profile}>
          <img src={Dp} alt="profile" className={style.webImg} />
          <img src={Dp} alt="profile" className={style.mobileImg} onClick={() => { setToggle("block") }} />
          <div className={style.name}>
            <p>
              {firstName} {lastName}
            </p>
            <small>{profile && profile.userDetails.role === "truckdriver" && "Truck Driver"}</small>
          </div>
        </div>
      </nav>

      <div className={style.navdropdown} style={{ display: `${toggle}` }} onClick={() => { setToggle("none") }}>
        <p className={style.navdropdownp}>{firstName} {lastName}</p>
        <button className={style.logoutBtn} onClick={handleLogOut}><IoLogOut /> <p>Log Out </p></button>
      </div>

    </div>
  );
};

export default NavBar;
