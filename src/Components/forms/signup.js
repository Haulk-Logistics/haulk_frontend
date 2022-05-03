import React, { useState } from "react";
import formstyle from "./style.module.css";
import Selectuser from "./user";
import { InputDefault, InputwithIcon, Phonenumberinput } from "../Input";
import { useForm } from "react-hook-form";
import Formheader from "./formheader";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { truckdetails } from "../../Store/Actions/truckdetail";
import { formstep } from "../../Store/Actions/stepper";
import { Pagecontrol } from "../../Store/Actions/pagecontrol";
import { useNavigate } from "react-router";
import { modalStatus } from "../../Store/Actions/ModalStatus";

const Register_URL = "https://haulk.herokuapp.com/api/auth/signupCargoOwner";

const Signup = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const usertype = useSelector((state) => state.status);
  const details = useSelector((state) => state.truck);
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // handle form events
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: page >= 1 && {
      firstName: `${details.firstName}`,
      lastName: `${details.lastName}`,
      phoneNumber: `${details.phoneNumber}`,
      email: `${details.email}`,
      password: `${details.password}`,
    },
  });

  // handle onsubmit
  const onsubmit = async (data) => {
    setIsLoading(false);
    const allData = { ...data, role: props.usertype };

    // If user is a truck driver
    if (usertype === "truckdriver") {
      dispatch(formstep(1));
      dispatch(Pagecontrol(1));
      dispatch(truckdetails(allData));
    }

    // If user is a cargo owner
    else {
      dispatch(truckdetails(allData));
      await axios
        .post(Register_URL, allData)
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
                  : err.response.data.message
                : "Network error",
            },
          });
        })
        .finally(() => setIsLoading(true));
    }
  };

  return (
		<section className={formstyle.formsection}>
			<Formheader
				head='Create Account'
				paragraph={
					props.usertype === 'truck_driver'
						? 'Fill in personal information to continue registration. '
						: 'Fill in personal information to register.'
				}
			/>
			<Selectuser />
			<form onSubmit={handleSubmit(onsubmit)}>
				{/*  First name section*/}
				<InputDefault
					labelname='First Name'
					type='text'
					placeholder='Enter First Name'
					name='firstName'
					register={register}
					pattern={/^[A-Za-z]+$/i}
					maxlength={parseInt('20')}
					error={errors.firstName}
				/>
				{errors.firstName && (
					<p className={formstyle.error}>{errors.firstName.message}</p>
				)}

				{/*  Last name section*/}
				<InputDefault
					labelname='Last Name'
					type='text'
					placeholder='Enter Last Name '
					name='lastName'
					register={register}
					pattern={/^[A-Za-z]+$/i}
					maxlength={parseInt('20')}
					error={errors.lastName}
				/>
				{errors.lastName && (
					<p className={formstyle.error}>{errors.lastName.message}</p>
				)}

				{/*  Phone number section*/}
				<Phonenumberinput
					labelname='Phone Number'
					type='text'
					placeholder='Phone Number '
					name='phoneNumber'
					register={register}
					required
					pattern={/^[0-9]+$/i}
					error={errors.phoneNumber}
				/>
				{errors.phoneNumber && (
					<p className={formstyle.error}>{errors.phoneNumber.message}</p>
				)}

				{/*  Email section*/}
				<InputDefault
					labelname='Email Address'
					type='email'
					placeholder='Enter Email Address '
					name='email'
					register={register}
					required
					pattern={
						/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
					}
					error={errors.email}
				/>
				{errors.email && (
					<p className={formstyle.error}>{errors.email.message}</p>
				)}

				{/*  Password section*/}
				<InputwithIcon
					labelname='Password'
					type='password'
					placeholder='Enter Password '
					name='password'
					register={register}
					pattern={/^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,100}$/}
					minlength={parseInt('8')}
					error={errors.password}
				/>
				{errors.password && (
					<p className={formstyle.error}>{errors.password.message}</p>
				)}

				{/*  Accept terms and condition section*/}
				<div className={formstyle.utils}>
					<input
						className={formstyle.agree}
						type='checkbox'
						{...register('agree', {
							required:
								'Please click the check box to accept the term and conditions',
						})}
					/>
					<p style={{ marginTop: '1rem' }}>
						I agree to the
						<Link to='/termsandconditions' className={formstyle.TandC__link}>
							<span className={formstyle.span}> Terms and Conditions </span>
						</Link>
					</p>
					{errors.agree && (
						<p className={formstyle.error}>{errors.agree.message}</p>
					)}
				</div>

				{/*  Submit button*/}
				<button className={formstyle.button}>
					{usertype === 'truckdriver'
						? 'Save & Next'
						: isLoading
						? 'Register'
						: 'Loading....'}
				</button>
			</form>
			<p className={formstyle.haveaccount}>
				Already have an account?{' '}
				<Link to='/login' className={formstyle.link}>
					{' '}
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
