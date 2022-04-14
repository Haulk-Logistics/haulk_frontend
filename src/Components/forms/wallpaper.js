import React from "react";
import hlkwallpaper from "../../Asset/Images/haulk-wallpaper.svg";
import imgstyle from "./style.module.css";

const Wallpaper = () => {
  return (
    <section className={imgstyle.imgsection}>
      <img src={hlkwallpaper} alt="Move with ease ...." />
    </section>
  );
};

export default Wallpaper;
