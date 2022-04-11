import React from "react";
import { Upload } from "../Input";
import Formheader from "./formheader";
import step3 from "../../Assets/images/step3.svg";
import { useForm } from "react-hook-form";
import formstyle from "./style.module.css";
import { connect } from "react-redux";
import { truckdetails } from "../../Actions/truckdetail";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  driver_licence: yup
    .mixed()
    .test("required", "Drivers licence is requred", (value) => {
      return value && value.length;
    }),
  tgls: yup
    .mixed()
    .test("required", "Transit goods licence is requred", (value) => {
      return value && value.length;
    }),
  portpass: yup.mixed().test("required", "Port pass is requred", (value) => {
    return value && value.length;
  }),
  truck_image: yup
    .mixed()
    .test("required", "Truck image is requred", (value) => {
      return value && value.length;
    }),
  drivers_img: yup
    .mixed()
    .test("required", "Drivers image is requred", (value) => {
      return value && value.length;
    }),
});

const Truckdetailcont = (props) => {
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
      <img src={step3} alt="STEP 2" className={formstyle.step2} />
      <form onSubmit={handleSubmit(onsubmit)}>
        <Upload
          labelname="Driver's Licence"
          filename={
            !watch("driver_licence") || watch("driver_licence").length === 0
              ? ""
              : watch("driver_licence")[0].name
          }
          id="driverlicence"
          name="driver_licence"
          register={register}
        />
        {errors.driver_licence && (
          <p className={formstyle.error}>{errors.driver_licence.message}</p>
        )}

        <Upload
          labelname="Transit goods licence (TGLs)"
          filename={
            !watch("tgls") || watch("tgls").length === 0
              ? ""
              : watch("tgls")[0].name
          }
          id="tgl"
          name="tgls"
          register={register}
        />
        {errors.tgls && (
          <p className={formstyle.error}>{errors.tgls.message}</p>
        )}

        <Upload
          labelname="Port Pass"
          filename={
            !watch("portpass") || watch("portpass").length === 0
              ? ""
              : watch("portpass")[0].name
          }
          id="portpass"
          name="portpass"
          register={register}
        />
        {errors.portpasses && (
          <p className={formstyle.error}>{errors.portpasses.message}</p>
        )}

        <Upload
          labelname="Truck Image"
          filename={
            !watch("truck_image") || watch("truck_image").length === 0
              ? ""
              : watch("truck_image")[0].name
          }
          id="truckimage"
          name="truck_image"
          register={register}
        />
        {errors.truck_image && (
          <p className={formstyle.error}>{errors.truck_image.message}</p>
        )}

        <Upload
          labelname="Driver's Image"
          filename={
            !watch("drivers_img") || watch("drivers_img").length === 0
              ? ""
              : watch("drivers_img")[0].name
          }
          id="drivers_img"
          name="drivers_img"
          accept="/image"
          register={register}
        />
        {errors.drivers_img && (
          <p className={formstyle.error}>{errors.drivers_img.message}</p>
        )}

        {/*  Submit button*/}
        <button className={formstyle.button}>Finish</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  truck: state.truck,
});

export default connect(mapStateToProps)(Truckdetailcont);
