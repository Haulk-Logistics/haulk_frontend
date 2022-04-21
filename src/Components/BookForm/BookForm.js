import React, { useState } from "react";
import { useForm } from "react-hook-form";

import styles from "./BookForm.module.css";
import { locations } from "../../Utils/statesData";
import { getLocation } from "../../Utils/getLocation";
import { getQuotation } from "./axios_call";
import QuotationModal from "../../Components/Modal/QuotationModal";

const BookForm = (props) => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      ownership: null,
    },
  });

  const [modal, setModal] = useState(false);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [size, setSize] = useState("");
  const [truck, setTruck] = useState("");
  const [amount, setAmount] = useState(0);
  const { ownership } = watch();

  const submitted = async (data) => {
    const { pickup, drop_off, container, truck_types } = data;
    const source = getLocation(locations, pickup);
    const destination = getLocation(locations, drop_off);
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
    setSource(pickup);
    setDestination(drop_off);
    setSize(container);
    setTruck(truck_types);
    setAmount(message);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className={modal ? styles.bodyModal : styles.body}>
      { (
        <div className={styles.main}>
          <div className={styles.heading}>
            <h3>Book a Truck</h3>
            <p>
              You are one-step away from solving your logistics concerns. Make
              that move today!
            </p>
          </div>
          <div className={styles.stepper}></div>
          <form className={styles.form} onSubmit={handleSubmit(submitted)}>
            <fieldset>
              <div className={styles.row}>
                <label htmlFor="goods">Nature of Goods</label>
                <div className={styles.select}>
                  <select
                    name="goods"
                    {...register("goods")}
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
                <label htmlFor="truck-types">Truck Type</label>
                <div className={styles.select}>
                  <select
                    name="truck-types"
                    {...register("truck_types")}
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
              <label htmlFor="pickup">Pick Up Location</label>
              <div className={styles.select}>
                <select name="pickup" {...register("pickup")}>
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
              <label htmlFor="drop_off">Drop Off Location</label>
              <div className={styles.select}>
                <select name="drop_off" {...register("drop_off")}>
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
              <label htmlFor="date">Pick Up Date</label>
              <input type="date" name="date" {...register("date", {})} />
            </fieldset>
            <fieldset className={styles.row}>
              <label htmlFor="container">Container Size</label>
              <div className={styles.select}>
                <select name="container" {...register("container", {})}>
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
              <label htmlFor="ownership">Proof of Ownership</label>
              <div className={styles.fileLabel}>
                <label htmlFor="ownership">
                  {ownership ? ownership[0].name : "Browse to upload"}
                </label>
              </div>
              <input
                className={styles.file}
                type="file"
                {...register("ownership")}
              />
            </fieldset>
            <fieldset>
              <div className={styles.row}>
                <label htmlFor="container-number">Container Number</label>
                <input
                  type="text"
                  name="container-number"
                  placeholder="Enter Number"
                  {...register("container-number")}
                />
              </div>
              <div className={styles.row}>
                <label htmlFor="shipping-line">Shipping Line</label>
                <input
                  type="text"
                  name="shipping-line"
                  placeholder="Enter Number"
                  {...register("shipping-line")}
                />
              </div>
            </fieldset>
            <input type="submit" value="Submit" className={styles.submitBtn} />
          </form>
        </div>
      )}
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

export default BookForm;
