import React from "react";
import style from "./style.module.css";
import logo from "../../Asset/logo/MobileLogo.svg";
import { HiViewGrid, HiCube } from "react-icons/hi";
import { IoLogOut } from "react-icons/io5";
import { IoMdWallet } from "react-icons/io";
import { RiAnticlockwise2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";

const SideBar = () => {
  const toggle = useSelector((state) => state.toggle);

  return (
    <React.Fragment>
      <div className={toggle ? style.sidebar__mobile : `${style.sidebar}`}>
        <div className={style.sidebar__header}>
          <img src={logo} alt="HAULK" />
        </div>
        <div className={style.sidebar__features}>
          <li>
            <HiViewGrid size="1.25rem" className={style.icon} />
            Dashboard
          </li>
          <li>
            {" "}
            <IoMdWallet size="1.25rem" className={style.icon} /> Wallet
          </li>
          <li>
            {" "}
            <HiCube size="1.25rem" className={style.icon} /> Active Order
          </li>
          <li>
            {" "}
            <RiAnticlockwise2Fill size="1.25rem" className={style.icon} /> Order
            History
          </li>
        </div>
        <div className={style.sidebar__logout}>
          <li>
            {" "}
            <IoLogOut size="1.25rem" className={style.icon} /> Log Out
          </li>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SideBar;
