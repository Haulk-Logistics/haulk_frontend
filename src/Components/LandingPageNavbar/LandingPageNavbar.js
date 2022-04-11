//Reusable Component for the Landing Page's Navbar

import React, { useState } from "react";
import styles from "./LandingPageNavbar.module.css";
import WebLogo from "../../Assets/logo/WebLogo.svg";
import MobileLogo from "../../Assets/logo/MobileLogo.svg";
import HamburgerIcon from "../../Assets/icon/HamburgerIcon.svg";
import CancelIcon from "../../Assets/icon/CancelIcon.svg";
import { useNavigate } from "react-router";

const LandingPageNavbar = (props) => {
  const link = "#";
  const [active, setActive] = useState(false);
  const openSideNav = () => {
    setActive(!active);
  };
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <div className={`${styles["navbar-left"]}`}>
        <a href={link}>
          <picture>
            <source
              srcset={MobileLogo}
              media="(max-width: 23.4375rem)"
            ></source>
            <img src={WebLogo} alt="Haulk's Logo" />
          </picture>
        </a>
      </div>
      <div
        className={`${styles["navbar-centre"]} ${
          active ? styles.closeNav : null
        }`}
      >
        <div className={`${styles["navbar-links"]}`}>
          <a href={link}>Home</a>
          <a href={link}>Resources</a>
          <a href={link}>About</a>
        </div>
        <div className={`${styles["navbar-buttons"]}`}>
          <button
            className={`${styles["navbar-CTA"]}`}
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className={`${styles["navbar-CTA"]}`}
            onClick={() => navigate("/hksignup")}
          >
            Create Account
          </button>
        </div>
      </div>
      <button className={styles.hamburger} onClick={() => openSideNav()}>
        <img src={active ? CancelIcon : HamburgerIcon} alt="Hamburger Icon" />
      </button>
    </nav>
  );
};

export default LandingPageNavbar;
