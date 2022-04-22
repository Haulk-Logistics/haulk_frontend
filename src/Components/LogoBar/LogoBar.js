import React from "react";
import {useNavigate} from "react-router";

import styles from "./LogoBar.module.css";
import WebLogo from "../../Asset/Icons/webLogo.svg";
import MobileLogo from "../../Asset/Icons/mobileLogo.svg";

const LogoBar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.logoBar}>
        <div onClick = {() => navigate("/")}>
            <picture>
                <source
                    srcset = {MobileLogo}
                    media ="(max-width: 40rem)"
                ></source>
                <img src={WebLogo} alt="Haulk's Logo"/>
            </picture>
        </div>
    </div>
  );
};

export default LogoBar;
