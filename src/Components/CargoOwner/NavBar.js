import React, { useState } from "react";
import style from "./style.module.css";
import Dp from "../../Asset/Icons/profileIcon.svg";
import { IoLogOut } from "react-icons/io5";
import logo from "../../Asset/logo/MobileLogo.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router"

const NavBar = ({ props }) => {
  const [toggle, setToggle] = useState("none")
  const navigate = useNavigate()
  const capitalizeFirstLetter = (string) => {
    const firstletter = string.slice(0, 1);
    const newWord = firstletter.toUpperCase() + string.slice(1)
    return newWord
  }

  const firstName = props && capitalizeFirstLetter(props.firstName)
  const lastName = props && capitalizeFirstLetter(props.lastName)

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/login");
  }

  return props && (
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
            <p>{firstName} {lastName}</p>
            <small>{props.role === "cargoowner" && "Cargo Owner"}</small>
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
