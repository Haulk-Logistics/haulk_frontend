import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import { useSelector } from "react-redux";
import { InputDefault } from "../Input";
import Button from "./button";
import Formheader from "./formheader";
import formstyle from "./style.module.css";

const ConfirmEmail = () => {
  const [isLoading, setIsLoading] = useState(false);
  //   const details = useSelector((state) => state.truckdetails);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onsubmit = async (data) => {
    // const Resend_Url = details.role
    //   ? "/https://haulk.herokuapp.com/api/auth/resendVerificationEmail"
    //   : "https://haulk.herokuapp.com/api/auth/sendResetPasswordEmail";
    setIsLoading(true);
    console.log(data);

    await axios.put;
  };
  return (
    <div className={formstyle.formsection}>
      <Formheader
        head="Verify Email Address"
        paragraph="A verification mail has been sent to nwezechidera@gmail.com. "
      />
      <form onSubmit={handleSubmit(onsubmit)}>
        <InputDefault
          labelname="Confirm Email Address"
          type="text"
          id="email"
          name="email"
          register={register}
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

export default ConfirmEmail;
