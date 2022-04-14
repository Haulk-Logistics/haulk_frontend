import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { InputwithIcon } from "../Input";
import Button from "./button";
import Formheader from "./formheader";
import formstyle from "./style.module.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  npassword: yup
    .string()
    .required("password is required.")
    .min(8, "Password should be atleast 8 characters long.")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,100}$/,
      "Password must contain uppercase,lowercase,number and special character."
    ),
  re_password: yup
    .string()
    .required("Re-type password is required.")
    .oneOf([yup.ref("npassword")], "Passwords does not match."),
});

const Resetpassword = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onsubmit = (data) => {
    setIsLoading(false);
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
    let value = params.token; // "some_value"
    console.log(value);
  };

  return (
    <div className={formstyle.formsection}>
      <Formheader
        head="Reset Password"
        paragraph="New password must be different from previously used password."
      />
      <form onSubmit={handleSubmit(onsubmit)}>
        <InputwithIcon
          labelname="Password"
          id="npassword"
          type="password"
          placeholder="Enter Password "
          name="npassword"
          register={register}
          error={errors.password}
        />
        {errors.npassword && (
          <p className={formstyle.error}>{errors.npassword.message}</p>
        )}

        <InputwithIcon
          labelname="Re-enter Password"
          name="re_password"
          id="rpassword"
          type="password"
          register={register}
          placeholder="Re-enter Password"
          error={errors.re_password}
        />
        {errors.re_password && (
          <p className={formstyle.error}>{errors.re_password.message}</p>
        )}

        <Button name="Submit" status={isLoading} />
      </form>
    </div>
  );
};

export default Resetpassword;
