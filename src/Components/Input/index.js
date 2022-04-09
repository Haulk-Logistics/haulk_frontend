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
  disabled,
  width,
  error,
  register,
  pattern,
  maxlength,
}) => {
  return (
    <div className={error ? Inputstyle.error : Inputstyle.default}>
      <label htmlFor={id}>{labelname}</label>
      <input
        className={Inputstyle.input}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        style={{ width: `${width}` }}
        {...register(name, {
          required: `${name} is required`,
          pattern: {
            value: pattern,
            message: ` ${
              type === "email"
                ? "Enter a valid email"
                : "Alphabetical characters only"
            }`,
          },
          maxLength: { value: maxlength, message: "Maximum length is 20" },
        })}
      />
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
  width,
  register,
  required,
  pattern,
  minlength,
  ...rest
}) => {
  const [state, setState] = useState("");

  return (
    <div className={error ? Inputstyle.error : Inputstyle.default}>
      <label htmlFor={id}>{labelname}</label>
      <div>
        <input
          className={Inputstyle.input}
          type={state ? state : type}
          id={id}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          style={{ width: `${width}` }}
          {...register(name, {
            required: `${name} is required`,
            pattern: {
              value: pattern,
              message:
                "Password must contain uppercase,lowercase,number and special character.",
            },
            minLength: {
              value: minlength,
              message: `Password must be atleast ${minlength} characters long.`,
            },
          })}
          {...rest}
        />
        <button
          className={Inputstyle.Icon}
          disabled={disabled}
          onClick={() => (state === "" ? setState("text") : setState(""))}
        >
          {state ? <AiFillEyeInvisible /> : <AiFillEye />}
        </button>
      </div>
    </div>
  );
};

//  plain input field  for phonenumber
const Phonenumberinput = ({
  labelname,
  id,
  type,
  name,
  placeholder,
  error,
  disabled,
  width,
  register,
  pattern,
  minlength,
  maxlength,
}) => {
  return (
    <div className={error ? Inputstyle.error : Inputstyle.default}>
      <label htmlFor={id}>{labelname}</label>
      <input
        className={Inputstyle.input}
        type={type}
        id={id}
        maxLength="11"
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        style={{ width: `${width}` }}
        {...register(name, {
          required: `${name} is required`,
          pattern: { value: pattern, message: "Numbers only" },
          minLength: {
            value: minlength,
            message: ` Enter a valid ${name} `,
          },
        })}
      />
    </div>
  );
};

export { InputDefault, InputwithIcon, Phonenumberinput };
