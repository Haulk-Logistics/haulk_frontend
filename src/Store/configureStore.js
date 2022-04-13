import { combineReducers, createStore } from "redux";
import status_reducer from "../Reducers/status_reducer";
import truckdetails_reducer from "../Reducers/truckdetails_reducer";
import alert_reducer from "../Reducers/alert_reducer";
import stepper_reducer from "../Reducers/stepper_reducer";

export default () => {
  const store = createStore(
    combineReducers({
      status: status_reducer,
      truck: truckdetails_reducer,
      alert: alert_reducer,
      step: stepper_reducer,
    })
  );
  return store;
};
