import React from "react";
import style from "./style.module.css";
import { HiViewGrid, HiCube } from "react-icons/hi";
import { IoLogOut } from "react-icons/io5";
import { IoMdWallet } from "react-icons/io";
import { RiAnticlockwise2Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { DashboardRender } from "../../Store/Actions/DashboardRender";
import { useNavigate } from "react-router";

const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activePage = useSelector((state) => state.dashboardRender);
  // console.log(activePage);

  const logo = (
    <svg
      width="130"
      height="20"
      viewBox="0 0 143 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38.8799 0.142029V6.32264H52.5192V10.0848H30.6719V25.6226H38.0628H59.5431V0.142029H38.8799ZM38.0606 19.4857V16.5254H52.5192V19.4857H38.0606Z"
        fill="#25373B"
      />
      <path
        d="M28.9652 0.128877V25.4499H21.7927V16.7656H7.13097V25.4237H0V0.102661H7.13097V9.57348H21.7927V0.128877H28.9652Z"
        fill="#25373B"
      />
      <path
        d="M88.4961 0.142029V25.45H61.3398V0.142029H68.6893V19.3437H81.3433V0.142029H88.4961Z"
        fill="#25373B"
      />
      <path
        d="M115.816 18.8127V25.4499H90.2832V0.220642H97.6086V18.8127H115.816Z"
        fill="#25373B"
      />
      <path
        d="M139.353 12.7239L139.08 12.8222L139.353 12.9445L143 14.5918V25.533H135.569V16.4117H124.724V25.533H117.467V0H124.724V10.7598H135.569V0.456609H143V11.3978L139.353 12.7239Z"
        fill="#25373B"
      />
      <path
        d="M139.353 12.7239V12.9446L139.08 12.8223L139.353 12.7239Z"
        fill="#25373B"
      />
    </svg>
  );

  return (
    <React.Fragment>
      <div className={style.sidebar}>
        <div className={style.sidebar__header}> {logo}</div>
        <div className={style.sidebar__features}>
          <li
            className={
              activePage === ""
                ? style.sidebar__featuresActive
                : style.sidebar__featureslink
            }
            onClick={() => {
              dispatch(DashboardRender(""));
            }}
          >
            <HiViewGrid size="1.25rem" className={style.icon} />
            <p> Home</p>
          </li>
          <li
            className={
              activePage === "wallet"
                ? style.sidebar__featuresActive
                : style.sidebar__featureslink
            }
          >
            <IoMdWallet size="1.25rem" className={style.icon} /> <p>Wallet</p>
          </li>
          <li
            className={
              activePage === "activeOrder"
                ? style.sidebar__featuresActive
                : style.sidebar__featureslink
            }
            onClick={() => {
              dispatch(DashboardRender("activeOrder"));
            }}
          >
            <HiCube size="1.25rem" className={style.icon} /> <p>Orders</p>
          </li>
          <li
            className={
              activePage === "orderHistory"
                ? style.sidebar__featuresActive
                : style.sidebar__featureslink
            }
            onClick={() => {
              dispatch(DashboardRender("orderHistory"));
            }}
          >
            {" "}
            <RiAnticlockwise2Fill size="1.25rem" className={style.icon} />
            <p>Order History</p>
          </li>
        </div>
        <div className={style.sidebar__logout}>
          <li onClick={() => navigate("/")}>
            <IoLogOut size="1.25rem" className={style.icon} /> <p>Log Out</p>
          </li>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SideBar;
