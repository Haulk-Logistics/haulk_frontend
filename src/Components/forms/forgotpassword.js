import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { InputDefault } from "../Input";
import Button from "./button";
import Formheader from "./formheader";
import formstyle from "./style.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";

const Forgotpassword = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  const dispatch = useDispatch();

  const Reset_URL =
    "https://haulk.herokuapp.com/api/auth/sendResetPasswordEmail";

  const onsubmit = async (data) => {
    setIsLoading(false);
    await axios
      .post(Reset_URL, data)
      .then((res) => {
        setIsLoading(true);
        dispatch({
          type: "success",
          payload: {
            title: "Successful!",
            message: res.data.message,
          },
        });
        console.log(res);
      })
      .catch((error) => {
        setIsLoading(true);
        dispatch({
          type: "error",
          payload: {
            title: "Error!",
            message: error.response.data.message,
          },
        });
      });
  };

  return (
    <div className={formstyle.formsection}>
      <Formheader
        head="Forgot Password"
        paragraph="Don't worry it happens. Please enter the Email Address associated with your account."
      />
      <form onSubmit={handleSubmit(onsubmit)}>
        <InputDefault
          labelname="Email Address"
          name="email"
          id="email"
          type="email"
          register={register}
          placeholder="Enter Email Address"
          error={errors.email}
        />
        {errors.email && (
          <p className={formstyle.error}>{errors.email.message}</p>
        )}
        <Button name="Submit" status={isLoading} />
      </form>
    </div>
  );
};

export default Forgotpassword;
