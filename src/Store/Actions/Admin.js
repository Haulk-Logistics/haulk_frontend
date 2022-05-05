import axios from "axios";
import { loaderStatus } from "./ModalStatus";
import setAuthToken from "../../Utils/setAuthToken";

export const getAllDrivers = () => async (dispatch) => {
  console.log("gettt");
  dispatch({
    type: "adminLoading",
  });
  const token = JSON.parse(localStorage.getItem("haulk-app-auth"));
  console.log(token);
  if (token) {
    setAuthToken(token);
  }
  try {
    const { data } = await axios.get(
      "https://haulk.herokuapp.com/admin/driver/awaiting_verification"
    );
    console.log(data, "data");
    data && dispatch(loaderStatus(false));
    dispatch({
      type: "allDrivers",
      payload: data && data.truck_drivers,
    });
  } catch (error) {
    dispatch({
      type: "adminError",
      payload: error.message,
    });
  }
};

export const getAllVerifiedDrivers = () => async (dispatch) => {
  dispatch({
    type: "adminLoading",
  });
  const token = JSON.parse(localStorage.getItem("haulk-app-auth"));
  console.log(token);
  if (token) {
    setAuthToken(token);
  }
  try {
    const { data } = await axios.get(
      "https://haulk.herokuapp.com/admin/driver/verified_drivers"
    );
    console.log(data, "data");
    data && dispatch(loaderStatus(false));
    dispatch({
      type: "allVerifiedDrivers",
      payload: data && data.truckDrivers,
    });
  } catch (error) {
    dispatch({
      type: "adminError",
      payload: error.message,
    });
  }
};

export const getAllCompletedOrders = () => async (dispatch) => {
  dispatch({
    type: "adminLoading",
  });
  const token = JSON.parse(localStorage.getItem("haulk-app-auth"));
  console.log(token);
  if (token) {
    setAuthToken(token);
  }
  try {
    const { data } = await axios.get(
      "https://haulk.herokuapp.com/admin/order/haulk_completed_orders"
    );
    console.log(data, "data");
    data && dispatch(loaderStatus(false));
    dispatch({
      type: "allCompletedOrders",
      payload: data && data.data,
    });
  } catch (error) {
    dispatch({
      type: "adminError",
      payload: error.message,
    });
  }
};

export const getAllCargoowners = () => async (dispatch) => {
  dispatch({
    type: "adminLoading",
  });
  const token = JSON.parse(localStorage.getItem("haulk-app-auth"));
  console.log(token);
  if (token) {
    setAuthToken(token);
  }
  try {
    const { data } = await axios.get(
      "https://haulk.herokuapp.com/admin/cargoowner/total_cargo_owners"
    );
    console.log(data, "data");
    data && dispatch(loaderStatus(false));
    dispatch({
      type: "allCargoowners",
      payload: data && data.data,
    });
  } catch (error) {
    dispatch({
      type: "adminError",
      payload: error.message,
    });
  }
};

export const AllDrivers = () => async (dispatch) => {
  dispatch({
    type: "adminLoading",
  });
  const token = JSON.parse(localStorage.getItem("haulk-app-auth"));
  console.log(token);
  if (token) {
    setAuthToken(token);
  }
  try {
    const { data } = await axios.get(
      "https://haulk.herokuapp.com/admin/driver/total_drivers"
    );
    console.log(data, "data");
    data && dispatch(loaderStatus(false));
    dispatch({
      type: "Drivers",
      payload: data && data.data,
    });
  } catch (error) {
    dispatch({
      type: "adminError",
      payload: error.message,
    });
  }
};

export const acceptDriver = id => async dispatch => {
  console.log("Accept Driver .....")
  console.log(id);
  dispatch({
    type: "adminLoading",
  });
  const token = JSON.parse(localStorage.getItem("haulk-app-auth"));
  if (token) {
    setAuthToken(token);
  }
  try {
    const { data } = await axios.put(
      `https://haulk.herokuapp.com/admin/driver/accept_driver/${id}`
    );
    console.log(data, "Accepted...........");
    data && dispatch(loaderStatus(false));
    dispatch({
      type: "acceptDriver",
      payload: data && data.message,
    });
  } catch (error) {
    dispatch({
      type: "adminError",
      payload: error.message,
    });
  }
};


export const rejectDriver = (message,id) => async dispatch => {
  const info = {reason_for_rejection: message};
  console.log(message, id);
    console.log("Accept Driver .....")
    console.log(id);
    dispatch({
      type: "adminLoading",
    });
    const token = JSON.parse(localStorage.getItem("haulk-app-auth"));
    if (token) {
      setAuthToken(token);
    }
    try {
      const { data } = await axios.put(
        `https://haulk.herokuapp.com/admin/driver/reject_driver/${id}`, info
      );
      console.log(data, "rejectedddd...........");
      data && dispatch(loaderStatus(false));
      dispatch({
        type: "rejectDriver",
        payload: data && data.message,
      });
    } catch (error) {
      console.log(error, "error........")
      dispatch({
        type: "adminError",
        payload: error.message,
      });
    }
};

export const setDriverId = (id) => async dispatch => {
  dispatch({
    type: "driverId",
    payload: id
  })
}