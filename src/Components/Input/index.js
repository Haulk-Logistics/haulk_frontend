import React, { useState } from "react";
import Inputstyle from "./styles.module.css";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

//  plain input field  for email, or text
const InputDefault = ({
  labelname,
  id,
  type,
  name,
  placeholder,
  error,
  disabled,
}) => {
  return (
    <div className={error ? Inputstyle.error : Inputstyle.default}>
      <label htmlFor={id}>{labelname}</label>
      <input
        type={type}
        id={id}
        name={name}
        required
        placeholder={placeholder}
        disabled={disabled}
      />
      {error && <p>{`*${error}`}</p>}
    </div>
  );
};

//  Input field  with eyeIcon suitable for password
const InputwithIcon = ({
  labelname,
  type,
  id,
  name,
  placeholder,
  disabled,
  error,
}) => {
  const [state, setState] = useState("");

  return (
    <div className={error ? Inputstyle.error : Inputstyle.default}>
      <label htmlFor={id}>{labelname}</label>
      <div>
        <input
          type={state ? state : type}
          id={id}
          name={name}
          required
          placeholder={placeholder}
          disabled={disabled}
        />
        <button
          className={Inputstyle.Icon}
          disabled={disabled}
          onClick={() => (state === "" ? setState("text") : setState(""))}
        >
          {" "}
          {state ? <AiFillEyeInvisible /> : <AiFillEye />}{" "}
        </button>
      </div>
      {error && <p>{`*${error}`}</p>}
    </div>
  );
};

export { InputDefault, InputwithIcon };
