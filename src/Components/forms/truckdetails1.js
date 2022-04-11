import React from "react";
import { Dropdown, Inputcharacter, Upload } from "../Input";
import Formheader from "./formheader";
import step2 from "../../Assets/Images/step2.svg";
import { useForm } from "react-hook-form";
import formstyle from "./style.module.css";
import { connect } from "react-redux";
import { truckdetails } from "../../Actions/truckdetail";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  vehicle_licence: yup
    .mixed()
    .test("required", "Vehicle licence/registration is required", (value) => {
      return value && value.length;
    }),

  cofroadworthiness: yup
    .mixed()
    .test("required", "Certificate of road worthiness is required", (value) => {
      return value && value.length;
    }),

  cofinsurance: yup
    .mixed()
    .test("required", "Certificate of insurance is required", (value) => {
      return value && value.length;
    }),
});

const Truckdetails = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onsubmit = (data) => {
    props.dispatch(truckdetails(data));
  };

  return (
    <div className={formstyle.truckform}>
      <Formheader
        head="Register Truck"
        paragraph="Fill in truck information to continue registration."
      />
      <img src={step2} alt="STEP 2" className={formstyle.step2} />
      <form onSubmit={handleSubmit(onsubmit)}>
        <Dropdown
          labelname="Truck Type"
          id="trucktype"
          name="trucktype"
          error={errors.trucktype}
          register={register}
          option={[
            { value: "", optionlabel: "Select" },
            { value: "Minitruck", optionlabel: "Mini Truck" },
            { value: "Box", optionlabel: "Box" },
            { value: "Trailer", optionlabel: "Trailer" },
            { value: "Flatbed", optionlabel: "Flatbed" },
          ]}
        />
        {errors.trucktype && (
          <p className={formstyle.error}>{errors.trucktype.message}</p>
        )}

        <Dropdown
          labelname="Truck Size"
          id="trucksize"
          name="trucksize"
          error={errors.trucksize}
          register={register}
          option={[
            { value: "", optionlabel: "Select" },
            { value: "10ft", optionlabel: "10-Foot" },
            { value: "12ft", optionlabel: "12-Foot" },
            { value: "16ft", optionlabel: "16-Foot" },
            { value: "22ft", optionlabel: "22-Foot" },
            { value: "26ft", optionlabel: "26-Foot" },
            { value: "32ft", optionlabel: "32-Foot" },
            { value: "24ft3a", optionlabel: "24-Foot, Three-Axle Truck" },
            { value: "36ft4a", optionlabel: "36-Foot, Four-Axle Truck" },
            { value: "43ft6a", optionlabel: "43-Foot, Six-Axle Truck" },
            { value: "51ft5a", optionlabel: "51-Foot, Five-Axle Truck" },
          ]}
        />
        {errors.trucksize && (
          <p className={formstyle.error}>{errors.trucksize.message}</p>
        )}

        <Inputcharacter
          labelname="License Plate Number"
          id="plateno"
          type="text"
          name="platenumber"
          errname="Plate Number"
          placeholder="Enter License Plate Number"
          error={errors.platenumber}
          register={register}
        />
        {errors.platenumber && (
          <p className={formstyle.error}>{errors.platenumber.message}</p>
        )}

        <Upload
          labelname="Vehicle Licence/Registration"
          filename={
            !watch("vehicle_licence") || watch("vehicle_licence").length === 0
              ? ""
              : watch("vehicle_licence")[0].name
          }
          id="vehlicence"
          name="vehicle_licence"
          register={register}
        />
        {errors.vehicle_licence && (
          <p className={formstyle.error}>{errors.vehicle_licence.message}</p>
        )}
        <Upload
          labelname="Certificate of Road Worthiness"
          filename={
            !watch("cofroadworthiness") ||
            watch("cofroadworthiness").length === 0
              ? ""
              : watch("cofroadworthiness")[0].name
          }
          id="crw"
          name="cofroadworthiness"
          register={register}
        />
        {errors.cofroadworthiness && (
          <p className={formstyle.error}>{errors.cofroadworthiness.message}</p>
        )}
        <Upload
          labelname="Certificate of Insurance"
          filename={
            !watch("cofinsurance") || watch("cofinsurance").length === 0
              ? ""
              : watch("cofinsurance")[0].name
          }
          id="ci"
          name="cofinsurance"
          register={register}
        />
        {errors.cofinsurance && (
          <p className={formstyle.error}>{errors.cofinsurance.message}</p>
        )}
        {/*  Submit button*/}
        <button className={formstyle.button}>Next</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  truck: state.truck,
});

export default connect(mapStateToProps)(Truckdetails);
