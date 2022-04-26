import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { InputDefault, InputwithIcon } from "../Input";
import Button from "./button";
import Formheader from "./formheader";
import loginstyle from "./style.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const Loginform = ({ user }) => {
  const Login_URL = user
    ? "https://haulk.herokuapp.com/admin/auth/signin"
    : "https://haulk.herokuapp.com/api/auth/signin";
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const navigate = useNavigate();

  const onsubmit = async (data) => {
    setIsLoading(true);
    await axios
      .post(Login_URL, data)
      .then((res) => {
        const userToken = res.data.token;
        localStorage.setItem("haulk-app-auth", JSON.stringify(userToken));
        if (res.data.admin_details) {
          console.log("I ran");
          dispatch({
            type: "success",
            payload: {
              title: "Successful!",
              message: res.data.message,
            },
          });
          console.log("I no ran");
        } else {
          if (res.data.user_details.role === "cargoowner") {
            navigate("/cargodashboard");
          }
          if (res.data.user_details.role === "truckdriver") {
            dispatch({
              type: "success",
              payload: {
                title: "Successful!",
                message: "Your accout is still under review. Check back soon!!",
              },
            });
          }
        }
      })
      .catch((error) => {
        dispatch({
          type: "error",
          payload: {
            title: "Error!",
            message: error.response
              ? error.response.data.message
              : "Network Error",
          },
        });
        // console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={loginstyle.login} style={{ paddingTop: "3rem" }}>
      <Formheader
        head="Login to your Account"
        paragraph=" Kindly fill in login details to continue."
      />

      <form onSubmit={handleSubmit(onsubmit)}>
        <InputDefault
          labelname="Email Address"
          type="email"
          id="email"
          name="email"
          register={register}
          error={errors.email}
          placeholder="Enter Email Address"
          pattern={
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          }
        />
        {errors.email && (
          <p className={loginstyle.error}>{errors.email.message}</p>
        )}
        <InputwithIcon
          labelname="Password"
          type="password"
          id="password"
          name="password"
          register={register}
          error={errors.password}
          placeholder="Enter Password"
        />
        {errors.password && (
          <p className={loginstyle.error}>{errors.password.message}</p>
        )}
        <div className={loginstyle.utils}>
          <div style={{ display: "flex" }}>
            <input
              className={loginstyle.agree}
              type="checkbox"
              name="checkbox"
              {...register("checkbox")}
            />
            <p style={{ marginTop: "1rem" }}>Keep me signed In</p>
          </div>
          <Link
            to="/forgotpassword"
            className={loginstyle.link}
            style={{ marginTop: ".9rem" }}
          >
            Forgot Password?
          </Link>
        </div>
        <Button name="Log In" status={isLoading} />
      </form>
      <p className={loginstyle.haveaccount}>
        Don't have an Account?
        <Link
          to="/signup"
          className={loginstyle.link}
          style={{ paddingLeft: ".2rem" }}
        >
          Create one
        </Link>
      </p>
    </div>
  );
};

export default Loginform;
