import React, { useState } from "react";
import styles from "./BookForm.module.css";
import { locations } from "../../Utils/statesData";
import { getLocation } from "../../Utils/getLocation";
import { getQuotation } from "./axios_call";
import QuotationModal from "../../Components/Modal/QuotationModal";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { orderSummary } from "../../Store/Actions/OrderSummary";
import { Upload } from "../Input";

const BookingForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      cargoImage: null,
    },
  });

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [size, setSize] = useState("");
  const [truck, setTruck] = useState("");
  const [amount, setAmount] = useState(0);
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };
  const dispatch = useDispatch();

  const submitted = async (data) => {
    dispatch(orderSummary(data));
    const { pickUpLocation, dropOffLocation, containerSize, truckType } = data;
    const source = getLocation(locations, pickUpLocation);
    const destination = getLocation(locations, dropOffLocation);
    const locationDetails = {
      latSrc: source.lat,
      longSrc: source.long,
      latDes: destination.lat,
      longDes: destination.long,
    };
    const {
      data: { message },
    } = await getQuotation(locationDetails);
    setModal(true);
    setSource(pickUpLocation);
    setDestination(dropOffLocation);
    setSize(containerSize);
    setTruck(truckType);
    setAmount(message);
    dispatch(orderSummary({ amount: message }));
  };

  return (
    <div className={modal ? styles.Book__BodyModal : styles.Book__Body}>
      {" "}
      <form className={styles.Book__form} onSubmit={handleSubmit(submitted)}>
        <fieldset>
          <div className={styles.row}>
            <label htmlFor="natureOfGoods">Nature of Goods</label>
            <div className={errors.natureOfGoods ? styles.error : styles.select}>
              <select
                name="natureOfGoods"
                {...register("natureOfGoods", {
                  required: ` Select an option`,
                })}
                className={styles.dropdown}
              >
                <option
                  value=""
                  disabled
                  selected
                  hidden
                  className={styles.invalid}
                >
                  Select
                </option>
                <option value="perishable">Perishable</option>
                <option value="non-perishable">Non-perishable</option>
              </select>
            </div>
            {errors.natureOfGoods && (
              <p className={styles.errorp}>{errors.natureOfGoods.message}</p>
            )}
          </div>


          <div className={styles.row}>
            <label htmlFor="truckType">Truck Type</label>
            <div className={errors.truckType ? styles.error : styles.select}>
              <select
                name="truckType"
                {...register("truckType", {
                  required: ` Select an option`
                })}
                className={styles.dropdown}
              >
                <option
                  value=""
                  disabled
                  selected
                  hidden
                  className={styles.invalid}
                >
                  Select
                </option>
                <option value="Minitruck">Mini Truck</option>
                <option value="Trailer">Trailer</option>
                <option value="Flatbed">Flat Bed</option>
                <option value="Box">Box Truck</option>
              </select>
            </div>

            {errors.truckType && (
              <p className={styles.errorp}>{errors.truckType.message}</p>
            )}
          </div>
        </fieldset>
        <fieldset className={styles.row}>
          <label htmlFor="pickUpLocation">Pick Up Location</label>
          <div className={errors.pickUpLocation ? styles.error : styles.select}>
            <select name="pickUpLocation" {...register("pickUpLocation", {
              required: ` Select an option`,
            })}>
              <option
                value=""
                disabled
                selected
                hidden
                className={styles.invalid}
              >
                Enter Address
              </option>
              {locations &&
                locations.map((location, i) => (
                  <option key={i} value={location.state}>
                    {location.state}
                  </option>
                ))}
            </select>
          </div>

          {errors.pickUpLocation && (
            <p className={styles.errorp}>{errors.pickUpLocation.message}</p>
          )}
        </fieldset>
        <fieldset className={styles.row}>
          <label htmlFor="dropOffLocation">Drop Off Location</label>
          <div className={errors.dropOffLocation ? styles.error : styles.select}>
            <select name="dropOffLocation" {...register("dropOffLocation", {
              required: ` Select an option`,
            })}>
              <option
                value=""
                disabled
                selected
                hidden
                className={styles.invalid}
              >
                Enter Address
              </option>
              {locations &&
                locations.map((location, i) => (
                  <option key={i} value={location.state}>
                    {location.state}
                  </option>
                ))}
            </select>
          </div>

          {errors.dropOffLocation && (
            <p className={styles.errorp}>{errors.dropOffLocation.message}</p>
          )}
        </fieldset>
        <fieldset className={styles.row}>
          <label htmlFor="pickUpDate">Pick Up Date</label>
          <div className={errors.pickUpDate ? styles.error : styles.rowdiv}>
            <input
              type="date"
              name="pickUpDate"
              {...register("pickUpDate", {
                required: ` Select a date`,
              })}
            />
          </div>
          {errors.pickUpDate && (
            <p className={styles.errorp}>{errors.pickUpDate.message}</p>
          )}
        </fieldset>
        <fieldset className={styles.row}>
          <label htmlFor="containerSize">Container Size</label>
          <div className={errors.containerSize ? styles.error : styles.select}>
            <select name="containerSize" {...register("containerSize", {
              required: ` Select an option`,
            })}>
              <option
                value=""
                disabled
                selected
                hidden
                className={styles.invalid}
              >
                Select
              </option>
              <option value="1 - 5">1 - 5 Tons</option>
              <option value="5 - 6">5 - 6 Tons</option>
              <option value="10 - 15">10 - 15 Tons</option>
            </select>
          </div>
          {errors.containerSize && (
            <p className={styles.errorp}>{errors.containerSize.message}</p>
          )}
        </fieldset>
        <fieldset className={styles.row} style={{ color: "var(--info-links)" }}>
          <Upload
            labelname="Proof of cargoImage"
            id="cargoImage"
            name="cargoImage"
            register={register}
            filename={
              !watch("cargoImage") ||
                watch("cargoImage").length === 0
                ? ""
                : watch("cargoImage")[0].name
            }
          />
          {errors.cargoImage && (
            <p className={styles.errorp}>{errors.cargoImage.message}</p>
          )}
        </fieldset>
        <fieldset>
          <div className={styles.row} >
            <label htmlFor="containerNumber">Container Number</label>
            <div className={errors.containerNumber ? styles.error : styles.rowdiv}>
              <input
                type="text"
                name="containerNumber"
                placeholder="Enter Shipping Number"
                {...register("containerNumber", {
                  required: ` Container number is required`,
                })}
              />
            </div>

            {errors.containerNumber && (
              <p className={styles.errorp}>{errors.containerNumber.message}</p>
            )}
          </div>
          <div className={styles.row}>
            <label htmlFor="shippingLine">Shipping Line</label>

            <div className={errors.shippingLine ? styles.error : styles.rowdiv}  >
              <input

                type="text"
                name="shippingLine"
                placeholder="Enter Shipping Line"
                {...register("shippingLine", {
                  required: ` Shipping Line is required`,
                })}
              />
            </div>

            {errors.shippingLine && (
              <p className={styles.errorp}>{errors.shippingLine.message}</p>
            )}
          </div>
        </fieldset>
        <input type="submit" value="Submit" className={styles.submitBtn} />
      </form>
      {modal && (
        <QuotationModal
          closeModal={closeModal}
          source={source}
          destination={destination}
          truck={truck}
          size={size}
          amount={amount}
        />
      )}
    </div>
  );
};

export default BookingForm;
