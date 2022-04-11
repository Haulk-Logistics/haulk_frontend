import { combineReducers, createStore } from "redux";
import status_reducer from "../Reducers/status_reducer";
import truckdetails_reducer from "../Reducers/truckdetails_reducer";

export default () => {
  const store = createStore(
    combineReducers({
      status: status_reducer,
      truck: truckdetails_reducer,
    })
  );
  return store;
};
