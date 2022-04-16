import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { InputwithIcon } from "../Input";
import Button from "./button";
import Formheader from "./formheader";
import formstyle from "./style.module.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const schema = yup.object().shape({
  newPassword: yup
    .string()
    .required("password is required.")
    .min(8, "Password should be atleast 8 characters long.")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,100}$/,
      "Password must contain uppercase,lowercase,number and special character."
    ),
  confirmPassword: yup
    .string()
    .required("Re-type password is required.")
    .oneOf([yup.ref("newPassword")], "Passwords does not match."),
});

const Resetpassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Reset_URL = "https://haulk.herokuapp.com/api/auth/resetPassword/";

  // Onsubmit
  const onsubmit = async (data) => {
    setIsLoading(true);

    await axios
      .post(Reset_URL, data, {
        headers: {
          // ContentType: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        navigate("/login");
        console.log(res);
        dispatch({
          type: "success",
          payload: {
            title: "Success!",
            message: res.data.message,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "error",
          payload: {
            title: "Error!",
            message: error.response
              ? error.response.data.message
              : "Network error",
          },
        });
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    // Get the value of "some_key" in eg "https://example.com/?t=some_value"
    let value = params.t; // "some_value"
    setToken(value);
  });

  return (
    <div className={formstyle.formsection}>
      <Formheader
        head="Reset Password"
        paragraph="New password must be different from previously used password."
      />
      <form onSubmit={handleSubmit(onsubmit)}>
        <InputwithIcon
          labelname="Password"
          id="newPassword"
          type="password"
          placeholder="Enter Password "
          name="newPassword"
          register={register}
          error={errors.password}
        />
        {errors.newPassword && (
          <p className={formstyle.error}>{errors.newPassword.message}</p>
        )}

        <InputwithIcon
          labelname="Re-enter Password"
          name="confirmPassword"
          id="rpassword"
          type="password"
          register={register}
          placeholder="Re-enter Password"
          error={errors.confirmPassword}
        />
        {errors.confirmPassword && (
          <p className={formstyle.error}>{errors.confirmPassword.message}</p>
        )}
        <Button name="Submit" status={isLoading} />
      </form>
    </div>
  );
};

export default Resetpassword;
