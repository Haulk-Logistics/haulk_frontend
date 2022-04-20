import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export const Postrequest = async ({ URL, data, dispatch, usertype }) => {
  const allData = { ...data, role: usertype };

  await axios
    .post(URL, allData)
    .then((res) => {
      dispatch({
        type: "success",
        payload: {
          title: "Success!",
          message: res.data.message,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: "error",
        payload: {
          title: "Error!",
          message:
            err.response.data.statusCode === 409
              ? err.response.data.message
              : "Phone number is invalid",
          // message: err.message
        },
      });
    });
};
