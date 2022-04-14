import React from "react";
import btnStyle from "./style.module.css";
import { BsArrowRepeat } from "react-icons/bs";

const Primary = ({ type, name, disabled = false, width }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${btnStyle.priBtn} ${btnStyle.button}`}
      style={{ width: `${width}` }}
    >
      {name}
    </button>
  );
};

const Secondary = ({ type, name, disabled = false }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${btnStyle.secBtn} ${btnStyle.button}`}
    >
      {name}
    </button>
  );
};

const PrimaryIcon = ({ type, name, disabled = false }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${btnStyle.priIconBtn} ${btnStyle.button}`}
    >
      {name}
      <BsArrowRepeat style={{ marginLeft: "0.5rem" }} />
    </button>
  );
};

const SecondaryIcon = ({ type, name, disabled = false }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${btnStyle.secIconBtn} ${btnStyle.button}`}
    >
      {name} <BsArrowRepeat style={{ marginLeft: "0.5rem" }} />
    </button>
  );
};

const Tertiary = ({ type, name, disabled = false }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${btnStyle.terBtn} ${btnStyle.button}`}
    >
      {name}
    </button>
  );
};

const TertiaryIcon = ({ type, name, disabled = false }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${btnStyle.terIconBtn} ${btnStyle.button}`}
    >
      {name} <BsArrowRepeat style={{ marginLeft: "0.5rem" }} />
    </button>
  );
};

const Destructive = ({ type, name, disabled = false }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${btnStyle.desBtn} ${btnStyle.button}`}
    >
      {name}
    </button>
  );
};

export {
  Primary,
  Secondary,
  PrimaryIcon,
  SecondaryIcon,
  Tertiary,
  TertiaryIcon,
  Destructive,
};
