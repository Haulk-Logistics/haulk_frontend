import React, { useState } from "react";
import styles from "./BookForm.module.css";
import { locations } from "../../Utils/statesData";
import { getLocation } from "../../Utils/getLocation";
import { getQuotation } from "./axios_call";
import QuotationModal from "../../Components/Modal/QuotationModal";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { orderSummary } from "../../Store/Actions/OrderSummary";

const BookingForm = () => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      cargoImage: null,
    },
  });

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [size, setSize] = useState("");
  const [truck, setTruck] = useState("");
  const [amount, setAmount] = useState(0);
  const { cargoImage } = watch();
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
            <div className={styles.select}>
              <select
                name="natureOfGoods"
                {...register("natureOfGoods")}
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
          </div>
          <div className={styles.row}>
            <label htmlFor="truckType">Truck Type</label>
            <div className={styles.select}>
              <select
                name="truckType"
                {...register("truckType")}
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
                <option value="Mini Truck">Mini Truck</option>
                <option value="Trailer">Trailer</option>
                <option value="Truck Head">Truck Head</option>
                <option value="Flat Bed">Flat Bed</option>
                <option value="Box Truck">Box Truck</option>
              </select>
            </div>
          </div>
        </fieldset>
        <fieldset className={styles.row}>
          <label htmlFor="pickUpLocation">Pick Up Location</label>
          <div className={styles.select}>
            <select name="pickUpLocation" {...register("pickUpLocation")}>
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
        </fieldset>
        <fieldset className={styles.row}>
          <label htmlFor="dropOffLocation">Drop Off Location</label>
          <div className={styles.select}>
            <select name="dropOffLocation" {...register("dropOffLocation")}>
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
        </fieldset>
        <fieldset className={styles.row}>
          <label htmlFor="pickUpDate">Pick Up Date</label>
          <input
            type="date"
            name="pickUpDate"
            {...register("pickUpDate", {})}
          />
        </fieldset>
        <fieldset className={styles.row}>
          <label htmlFor="containerSize">Container Size</label>
          <div className={styles.select}>
            <select name="containerSize" {...register("containerSize", {})}>
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
        </fieldset>
        <fieldset className={styles.row}>
          <label htmlFor="cargoImage">Proof of cargoImage</label>
          <div className={styles.fileLabel}>
            <label htmlFor="cargoImage">
              {cargoImage ? cargoImage[0].name : "Browse to upload"}
            </label>
          </div>
          <input
            className={styles.file}
            type="file"
            {...register("cargoImage")}
          />
        </fieldset>
        <fieldset>
          <div className={styles.row}>
            <label htmlFor="containerNumber">Container Number</label>
            <input
              type="text"
              name="containerNumber"
              placeholder="Enter Number"
              {...register("containerNumber")}
            />
          </div>
          <div className={styles.row}>
            <label htmlFor="shippingLine">Shipping Line</label>
            <input
              type="text"
              name="shippingLine"
              placeholder="Enter Number"
              {...register("shippingLine")}
            />
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
