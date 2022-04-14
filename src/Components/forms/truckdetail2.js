import React from "react";
import { Upload } from "../Input";
import Formheader from "./formheader";
import { useForm } from "react-hook-form";
import formstyle from "./style.module.css";
import { connect, useDispatch } from "react-redux";
import { truckdetails } from "../../Store/Actions/truckdetail";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Pagecontrol } from "../../Store/Actions/pagecontrol";
import Selectuser from "./user";

const schema = yup.object().shape({
  driverLicenseImage: yup
    .mixed()
    .test("required", "Drivers licence is requred", (value) => {
      return value && value.length;
    }),
  transitGoodsLicenseImage: yup
    .mixed()
    .test("required", "Transit goods licence is requred", (value) => {
      return value && value.length;
    }),
  portPassesImage: yup
    .mixed()
    .test("required", "Port pass is requred", (value) => {
      return value && value.length;
    }),
  truckImage: yup
    .mixed()
    .test("required", "Truck image is requred", (value) => {
      return value && value.length;
    }),
  driverImage: yup
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

  const dispatch = useDispatch();

  const onsubmit = (data) => {
    props.dispatch(truckdetails(data));
    dispatch(Pagecontrol(3));

    console.log(data);
  };

  return (
    <div className={formstyle.formsection}>
      <Formheader
        head="Register Truck"
        paragraph="Fill in truck information to continue registration."
      />
      <Selectuser />
      <form onSubmit={handleSubmit(onsubmit)}>
        <Upload
          labelname="Driver's Licence"
          filename={
            !watch("driverLicenseImage") ||
            watch("driverLicenseImage").length === 0
              ? ""
              : watch("driverLicenseImage")[0].name
          }
          id="driverlicence"
          name="driverLicenseImage"
          register={register}
        />
        {errors.driverLicenseImage && (
          <p className={formstyle.error}>{errors.driverLicenseImage.message}</p>
        )}

        <Upload
          labelname="Transit goods licence (TGLs)"
          filename={
            !watch("transitGoodsLicenseImage") ||
            watch("transitGoodsLicenseImage").length === 0
              ? ""
              : watch("transitGoodsLicenseImage")[0].name
          }
          id="tgl"
          name="transitGoodsLicenseImage"
          register={register}
        />
        {errors.transitGoodsLicenseImage && (
          <p className={formstyle.error}>
            {errors.transitGoodsLicenseImage.message}
          </p>
        )}

        <Upload
          labelname="Port Pass"
          filename={
            !watch("portPassesImage") || watch("portPassesImage").length === 0
              ? ""
              : watch("portPassesImage")[0].name
          }
          id="portPassesImage"
          name="portPassesImage"
          register={register}
        />
        {errors.portPassesImage && (
          <p className={formstyle.error}>{errors.portPassesImage.message}</p>
        )}

        <Upload
          labelname="Truck Image"
          filename={
            !watch("truckImage") || watch("truckImage").length === 0
              ? ""
              : watch("truckImage")[0].name
          }
          id="truckimage"
          name="truckImage"
          register={register}
        />
        {errors.truckImage && (
          <p className={formstyle.error}>{errors.truckImage.message}</p>
        )}

        <Upload
          labelname="Driver's Image"
          filename={
            !watch("driverImage") || watch("driverImage").length === 0
              ? ""
              : watch("driverImage")[0].name
          }
          id="driverImage"
          name="driverImage"
          accept="/image"
          register={register}
        />
        {errors.driverImage && (
          <p className={formstyle.error}>{errors.driverImage.message}</p>
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
