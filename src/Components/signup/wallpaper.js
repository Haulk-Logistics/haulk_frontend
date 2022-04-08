import React from "react";
import hlkwallpaper from "../../Assets/images/haulk-wallpaper.svg";
import imgstyle from "./style.module.css";

const Wallpaper = () => {
  return (
    <section className={imgstyle.imgsection}>
      <img src={hlkwallpaper} />
    </section>
  );
};

export default Wallpaper;
