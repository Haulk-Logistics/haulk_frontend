import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { modalStatus } from "../../Store/Actions/ModalStatus";
import { InputDefault } from "../Input";
import Button from "./button";
import Formheader from "./formheader";
import formstyle from "./style.module.css";

const ConfirmEmail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const details = useSelector((state) => state.truckdetails);
  console.log(details);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  const onsubmit = async (data) => {
    setIsLoading(true);

    if (details.role) {
      await axios
        .put(
          "/https://haulk.herokuapp.com/api/auth/resendVerificationEmail",
          data
        )
        .then((res) => {
          navigate("/login");
          dispatch(
            modalStatus({
              status: "true",
              message: res.data.message,
              link: "/confirmemail",
            })
          );
        })
        .catch((err) => {
          dispatch({
            type: "error",
            payload: {
              title: "Error!",
              message: err.response
                ? err.response.data.statusCode === 409
                  ? err.response.data.message
                  : "Phone number is invalid"
                : "Network error",
            },
          });
        })
        .finally(() => setIsLoading(false));
    } else {
      await axios
        .post(
          "https://haulk.herokuapp.com/api/auth/sendResetPasswordEmail",
          data
        )
        .then((res) => {
          dispatch(
            modalStatus({
              status: "true",
              message: res.data.message,
              link: "/confirmemail",
            })
          );
        })
        .catch((err) => {
          dispatch({
            type: "error",
            payload: {
              title: "Error!",
              message: err.response
                ? err.response.data.statusCode === 409
                  ? err.response.data.message
                  : "Phone number is invalid"
                : "Network error",
            },
          });
        })
        .finally(() => setIsLoading(false));
    }
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
