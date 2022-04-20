import React from "react";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import { FcInfo } from "react-icons/fc";
import {tooltipstyle} from './styles.css'

const Tooltip = ({ content }) => {
  {
    tippy("#tooltip", {
      content:  `${content}`, zIndex: 9999, theme: 'light',
    });
  }
  return (
    <div>
      <button id="tooltip">
        <FcInfo />
      </button>
    </div>
  );
};

export { Tooltip };
