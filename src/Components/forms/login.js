import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { InputDefault, InputwithIcon } from "../Input";
import Button from "./button";
import Formheader from "./formheader";
import loginstyle from "./style.module.css";

const Loginform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  return (
    <div className={loginstyle.formsection} style={{ paddingTop: "6rem" }}>
      <Formheader
        head="Login to your Account"
        paragraph=" Kindly fill in login details to continue."
      />
      <form>
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
          <div>
            <input
              className={loginstyle.agree}
              type="checkbox"
              name="checkbox"
              {...register("checkbox")}
            />
            <span>Keep me signed In</span>
          </div>
          <Link
            to="/forgotpassword"
            className={loginstyle.link}
            style={{ marginTop: ".7rem" }}
          >
            Forgot Password?
          </Link>
        </div>
        <Button name="Log In" />
      </form>
      <p>
        Don't have an Account?
        <Link
          to="/hksignup"
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
