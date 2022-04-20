import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { InputDefault } from "../Input";
import Button from "./button";
import Formheader from "./formheader";
import formstyle from "./style.module.css";

const ConfirmEmail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const details = useSelector((state) => state.truckdetails);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      email: `${details.email}`,
    },
  });

  const onsubmit = (data) => {
    setIsLoading(false);
    console.log(data);
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
