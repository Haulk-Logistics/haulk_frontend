import React, { useState } from "react";
import Inputstyle from "./styles.module.css";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

//  input field  for email, or text ensure to pass
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
          required: `${labelname} is required`,
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

// Input without pattern
const Inputcharacter = ({
  labelname,
  id,
  value,
  type,
  name,
  placeholder,
  disabled,
  width,
  error,
  register,
  errname,
}) => {
  return (
    <div className={error ? Inputstyle.error : Inputstyle.default}>
      <label htmlFor={id}>{labelname}</label>
      <input
        value={value}
        className={Inputstyle.input}
        type={type}
        id={id}
        errname={errname}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        style={{ width: `${width}` }}
        {...register(name, {
          required: `${errname} is required`,
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
  value,
  name,
  placeholder,
  disabled,
  error,
  width,
  register,
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
          value={value}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          style={{ width: `${width}` }}
          {...register(name, {
            required: `${labelname} is required`,
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
        <div className={Inputstyle.eye}>
          <button
            type="button"
            className={Inputstyle.Icon}
            disabled={disabled}
            onClick={() => {
              state === "" ? setState("text") : setState("");
            }}
          >
            {state ? <AiFillEye /> : <AiFillEyeInvisible />}
          </button>
        </div>
      </div>
    </div>
  );
};

//  input field  for phonenumber
const Phonenumberinput = ({
  labelname,
  id,
  type,
  name,
  value,
  placeholder,
  error,
  disabled,
  width,
  register,
  pattern,
  minlength,
}) => {
  return (
    <div className={error ? Inputstyle.error : Inputstyle.default}>
      <label htmlFor={id}>{labelname}</label>
      <input
        className={Inputstyle.input}
        type={type}
        id={id}
        value={value}
        maxLength="11"
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        style={{ width: `${width}` }}
        {...register(name, {
          required: `${labelname} is required`,
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

// Drop down input field
const Dropdown = ({
  labelname,
  value,
  id,
  name,
  disabled,
  error,
  register,
  option,
}) => {
  return (
    <div className={error ? Inputstyle.error : Inputstyle.default}>
      <label htmlFor={id}>{labelname}</label>
      <select
        className={Inputstyle.input}
        id={id}
        value={value}
        name={name}
        disabled={disabled}
        {...register(name, {
          required: ` Select an option`,
        })}
      >
        {option.map(({ value, optionlabel }, index) => {
          return (
            <option value={value} key={index}>
              {optionlabel}
            </option>
          );
        })}
      </select>
    </div>
  );
};

// Upload file input field
const Upload = ({
  labelname,
  id,
  name,
  disabled,
  error,
  register,
  filename,
}) => {
  return (
    <div className={error ? Inputstyle.error : Inputstyle.default}>
      <label htmlFor={id}>{labelname}</label>
      <div className={Inputstyle.uploading}>
        <label htmlFor={id}>{filename ? `${filename}` : "Upload Image"}</label>
      </div>
      <input
        className={Inputstyle.uploadinput}
        type="file"
        id={id}
        name={name}
        disabled={disabled}
        accept="/image"
        {...register(name, {
          required: ` Select an option`,
        })}
      />
    </div>
  );
};

export {
  InputDefault,
  InputwithIcon,
  Phonenumberinput,
  Dropdown,
  Upload,
  Inputcharacter,
};
