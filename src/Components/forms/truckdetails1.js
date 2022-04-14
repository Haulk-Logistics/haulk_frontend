import React from "react";
import { Dropdown, Inputcharacter, Upload } from "../Input";
import Formheader from "./formheader";
import { useForm } from "react-hook-form";
import formstyle from "./style.module.css";
import { connect, useDispatch, useSelector } from "react-redux";
import { truckdetails } from "../../Store/Actions/truckdetail";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { formstep } from "../../Store/Actions/stepper";
import { Pagecontrol } from "../../Store/Actions/pagecontrol";
import Selectuser from "./user";

const schema = yup.object().shape({
  truckType: yup.string().required("Truck type is required"),
  truckSize: yup.string().required("Truck Size is required"),
  licensePlateNumber: yup.string().required("Plate number is required"),
  vehicleLicenceImage: yup
    .mixed()
    .test("required", "Vehicle licence/registration is required", (value) => {
      return value && value.length;
    }),

  certificateOfRoadWorthinessImage: yup
    .mixed()
    .test("required", "Certificate of road worthiness is required", (value) => {
      return value && value.length;
    }),

  certificateOfInsuranceImage: yup
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

  const dispatch = useDispatch();
  const details = useSelector((state) => state.truck);
  console.log(
    details.vehicleLicenceImage && details.vehicleLicenceImage[0].name
  );

  const onsubmit = (data) => {
    console.log(data);
    dispatch(truckdetails(data));
    dispatch(formstep(2));
    dispatch(Pagecontrol(2));
  };

  return (
    <div className={formstyle.formsection}>
      <Formheader
        head="Register Truck"
        paragraph="Fill in truck information to continue registration."
      />
      <Selectuser />
      <form onSubmit={handleSubmit(onsubmit)}>
        <Dropdown
          labelname="Truck Type"
          id="trucktype"
          name="truckType"
          value={details.truckType}
          error={errors.truckType}
          register={register}
          option={[
            { value: "", optionlabel: "Select" },
            { value: "Minitruck", optionlabel: "Mini Truck" },
            { value: "Box", optionlabel: "Box" },
            { value: "Trailer", optionlabel: "Trailer" },
            { value: "Flatbed", optionlabel: "Flatbed" },
          ]}
        />
        {errors.truckType && (
          <p className={formstyle.error}>{errors.truckType.message}</p>
        )}

        <Dropdown
          labelname="Truck Size"
          id="trucksize"
          value={details.truckSize}
          name="truckSize"
          error={errors.truckSize}
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
        {errors.truckSize && (
          <p className={formstyle.error}>{errors.truckSize.message}</p>
        )}

        <Inputcharacter
          labelname="License Plate Number"
          id="plateno"
          type="text"
          value={details.licensePlateNumber}
          name="licensePlateNumber"
          errname="Plate Number"
          placeholder="Enter License Plate Number"
          error={errors.licensePlateNumber}
          register={register}
        />
        {errors.licensePlateNumber && (
          <p className={formstyle.error}>{errors.licensePlateNumber.message}</p>
        )}

        <Upload
          labelname="Vehicle Licence/Registration"
          // value={details.vehicleLicenceImage[0].name}
          value={
            details.vehicleLicenceImage && details.vehicleLicenceImage[0].name
          }
          filename={
            !watch("vehicleLicenceImage") ||
            watch("vehicleLicenceImage").length === 0
              ? ""
              : watch("vehicleLicenceImage")[0].name
          }
          id="vehlicence"
          name="vehicleLicenceImage"
          register={register}
        />
        {errors.vehicleLicenceImage && (
          <p className={formstyle.error}>
            {errors.vehicleLicenceImage.message}
          </p>
        )}
        <Upload
          labelname="Certificate of Road Worthiness"
          value={
            details.certificateOfRoadWorthinessImage &&
            details.certificateOfRoadWorthinessImage[0].name
          }
          filename={
            !watch("certificateOfRoadWorthinessImage") ||
            watch("certificateOfRoadWorthinessImage").length === 0
              ? ""
              : watch("certificateOfRoadWorthinessImage")[0].name
          }
          id="crw"
          name="certificateOfRoadWorthinessImage"
          register={register}
        />
        {errors.certificateOfRoadWorthinessImage && (
          <p className={formstyle.error}>
            {errors.certificateOfRoadWorthinessImage.message}
          </p>
        )}
        <Upload
          labelname="Certificate of Insurance"
          value={
            details.certificateOfInsuranceImage &&
            details.certificateOfInsuranceImage[0].name
          }
          filename={
            !watch("certificateOfInsuranceImage") ||
            watch("certificateOfInsuranceImage").length === 0
              ? ""
              : watch("certificateOfInsuranceImage")[0].name
          }
          id="ci"
          name="certificateOfInsuranceImage"
          register={register}
        />
        {errors.certificateOfInsuranceImage && (
          <p className={formstyle.error}>
            {errors.certificateOfInsuranceImage.message}
          </p>
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
