import React from "react";
import { Link } from "react-router-dom";
import hlkwallpaper from "../../Asset/Images/haulk-wallpaper.svg";
import imgstyle from "./style.module.css";

const Wallpaper = () => {
  return (
    <section className={imgstyle.imgsection}>
      <Link to="/">
        <img src={hlkwallpaper} alt="Move with ease ...." />
      </Link>
    </section>
  );
};

export default Wallpaper;
