import React from "react";
import styles from "./LogoBar.module.css";
import WebLogo from "../../Asset/Icons/webLogo.svg";
import MobileLogo from "../../Asset/Icons/mobileLogo.svg";
import { Link } from "react-router-dom";

const LogoBar = () => {
  return (
    <div className={styles.logoBar}>
      <div>
        <picture>
          <source srcset={MobileLogo} media="(max-width: 40rem)"></source>
          <Link to="/">
            <img src={WebLogo} alt="Haulk's Logo" />
          </Link>
        </picture>
      </div>
    </div>
  );
};

export default LogoBar;
