import React from "react";
import formstyle from "./style.module.css";
import Selectuser from "./user";
import { InputDefault, InputwithIcon, Phonenumberinput } from "../Input";
import { useForm } from "react-hook-form";
import Formheader from "./formheader";
import { connect } from "react-redux";
import haulklogo from "../../Assets/logo/MobileLogo.svg";
import { Link } from "react-router-dom";

const Signup = (props) => {
  // handle form events

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onsubmit = (data) => {
    switch (props.usertype) {
      case "cargo_owner":
        alert("hello cargo owner");
        break;
      case "truck_driver":
        alert("hello truck driver");
        break;
      default:
        alert(JSON.stringify(data));
        break;
    }
  };

  console.log(props.usertype);

  return (
    <section className={formstyle.formsection}>
      <img src={haulklogo} alt="HAULK LOGO" className={formstyle.logo} />
      <Formheader
        head="Create An Account"
        paragraph={
          props.usertype === "truck_driver"
            ? "Fill in personal information to continue registration. "
            : "Fill in personal information to register."
        }
      />
      <Selectuser />
      <form onSubmit={handleSubmit(onsubmit)}>
        {/*  First name section*/}
        <InputDefault
          labelname="First Name"
          type="text"
          placeholder="Enter  first name"
          name="Firstname"
          register={register}
          pattern={/^[A-Za-z]+$/i}
          maxlength={parseInt("20")}
          error={errors.Firstname}
        />
        {errors.Firstname && (
          <p className={formstyle.error}>{errors.Firstname.message}</p>
        )}

        {/*  Last name section*/}
        <InputDefault
          labelname="Last Name"
          type="text"
          placeholder="Enter Last Name "
          name="Lastname"
          register={register}
          pattern={/^[A-Za-z]+$/i}
          maxlength={parseInt("20")}
          error={errors.Lastname}
        />
        {errors.Lastname && (
          <p className={formstyle.error}>{errors.Lastname.message}</p>
        )}

        {/*  Phone number section*/}
        <Phonenumberinput
          labelname="Phone Number"
          type="text"
          placeholder="Phone Number "
          name="Phonenumber"
          register={register}
          required
          pattern={/^[0-9]+$/i}
          maxlength={parseInt("11")}
          minlength={parseInt("9")}
          error={errors.Phonenumber}
        />
        {errors.Phonenumber && (
          <p className={formstyle.error}>{errors.Phonenumber.message}</p>
        )}

        {/*  Email section*/}
        <InputDefault
          labelname="Email Address"
          type="email"
          placeholder="Enter Email Address "
          name="Email"
          register={register}
          required
          pattern={
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          }
          error={errors.Email}
        />
        {errors.Email && (
          <p className={formstyle.error}>{errors.Email.message}</p>
        )}

        {/*  Password section*/}
        <InputwithIcon
          labelname="Password"
          type="password"
          placeholder="Enter Password "
          name="Password"
          register={register}
          pattern={
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,100}$/
          }
          minlength={parseInt("8")}
          error={errors.Password}
        />
        {errors.Password && (
          <p className={formstyle.error}>{errors.Password.message}</p>
        )}

        {/*  Accept terms and condition section*/}
        <input
          className={formstyle.agree}
          type="checkbox"
          {...register("agree", {
            required:
              "Please click the check box to accept the term and conditions",
          })}
        />
        <span>
          I agree to the
          <span className={formstyle.span}> Terms and Conditions </span>
        </span>
        {errors.agree && (
          <p className={formstyle.error}>{errors.agree.message}</p>
        )}

        {/*  Submit button*/}
        <button className={formstyle.button}>Register</button>
      </form>

      <p className={formstyle.haveaccount}>
        Already have an account?{" "}
        <Link to="/login" className={formstyle.link}>
          {" "}
          Login
        </Link>
      </p>
    </section>
  );
};

const mapStateToProps = (state) => ({
  usertype: state.status,
});

export default connect(mapStateToProps)(Signup);
