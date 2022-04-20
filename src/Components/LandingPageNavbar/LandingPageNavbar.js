//Reusable Component for the Landing Page's Navbar

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./LandingPageNavbar.module.css";
import WebLogo from "../../Asset/Icons/webLogo.svg";
import MobileLogo from "../../Asset/Icons/mobileLogo.svg";
import HamburgerIcon from "../../Asset/Icons/hamburgerIcon.svg";
import CancelIcon from "../../Asset/Icons/cancelIcon.svg";
import {useNavigate} from "react-router";

const LandingPageNavbar = (props) => {
  const {pathname} = useLocation();
  let name = pathname.split("/")[1];

  const [active, setActive] = useState(false);
  const openSideNav = () => {
    setActive(!active);
  };

  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <div className={`${styles["navbar-left"]}`}>
        <Link to = "/">
          <picture>
            <source
              srcSet={MobileLogo}
              media="(max-width: 40rem)"
            ></source>
            <img src={WebLogo} alt="Haulk's Logo" />
          </picture>
        </Link>
      </div>
      <div
        className={`${styles["navbar-centre"]} ${
          active ? styles.closeNav : null
        }`}
      >
        <div className={`${styles["navbar-links"]}`}>
          <Link to="/" className={name === "" ? "activeNav" : null}>
            Home
          </Link>
          <Link
            to="/resources"
            className={name === "resources" ? "activeNav" : null}>
            Resources
          </Link>
          <Link to="">About</Link>
        </div>
        <div className={`${styles["navbar-buttons"]}`}>
          <button className={`${styles["navbar-CTA"]}`}
            onClick={() => navigate("/login")}>Login</button>
          <button className={`${styles["navbar-CTA"]}`}
            onClick={() => navigate("/signup")}
          >Create Account</button>
        </div>
      </div>
      <button className={styles.hamburger} onClick={() => openSideNav()}>
        <img src={active ? CancelIcon : HamburgerIcon} alt="Hamburger Icon" />
      </button>
    </nav>
  );
};

export default LandingPageNavbar;
