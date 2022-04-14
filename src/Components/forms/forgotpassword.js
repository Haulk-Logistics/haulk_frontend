import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { InputDefault } from "../Input";
import Button from "./button";
import Formheader from "./formheader";
import formstyle from "./style.module.css";

const Forgotpassword = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onsubmit = (data) => {
    setIsLoading(false);
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
