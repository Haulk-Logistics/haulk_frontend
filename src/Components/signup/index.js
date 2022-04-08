import React from "react";
import formstyle from "./style.module.css";
import { Selectuser } from "./user";
import { InputDefault, InputwithIcon } from "../Input";

const Signup = () => {
  return (
    <section className={formstyle.formsection}>
      <header>
        <h3>Create Account</h3>
        <p>Fill in personal information to continue registration. </p>
      </header>
      <Selectuser />
      <form>
        <InputDefault
          labelname="First Name"
          type="text"
          placeholder="Enter  First Name"
          name="firstname"
        />
        <InputDefault
          labelname="Last Name"
          type="text"
          placeholder="Enter LastName "
          name="lastname"
        />
        <InputDefault
          labelname="Phone Number"
          type="text"
          placeholder="Phone Number "
          name="phonenumber"
        />
        <InputDefault
          labelname="Email Address"
          type="text"
          placeholder="Enter Email Address "
          name="email"
        />
        <InputwithIcon
          labelname="Password"
          type="password"
          placeholder="Enter Password "
          name="email"
        />
        <input className={formstyle.agree} type="checkbox" />
        <span>I agree to the Terms and Conditions </span>
        <button className={formstyle.button}>Register</button>
      </form>
      <p>Already have an account? Login</p>
    </section>
  );
};

export default Signup;
