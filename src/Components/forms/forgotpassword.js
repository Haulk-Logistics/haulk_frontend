import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { InputDefault } from "../Input";
import Button from "./button";
import Formheader from "./formheader";
import formstyle from "./style.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { modalStatus } from "../../Store/Actions/ModalStatus";

const Forgotpassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  const dispatch = useDispatch();

  const onsubmit = async (data) => {
    const Reset_URL =
      "https://haulk.herokuapp.com/api/auth/sendResetPasswordEmail";
    setIsLoading(true);
    await axios
      .post(Reset_URL, data)
      .then((res) => {
        dispatch(
          modalStatus({
            status: "true",
            message: res.data.message,
            link: "/confirmemail",
          })
        );
      })
      .catch((error) => {
        dispatch({
          type: "error",
          payload: {
            title: "Error!",
            message: error ? error.response.data.message : "Network Error",
          },
        });
      })
      .finally(() => setIsLoading(false));
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
