import { combineReducers, createStore } from "redux";
import status_reducer from "./Reducers/status_reducer";
import truckdetails_reducer from "./Reducers/truckdetails_reducer";
import stepper_reducer from "./Reducers/stepper_reducer";
import ModalReducer from "./Reducers/ModalReducer";
import page_reducer from "./Reducers/page_reducer";
import alert_reducer from "./Reducers/alert_reducer";
import Toggler from "./Reducers/Toggler";

export default () => {
  const store = createStore(
    combineReducers({
      status: status_reducer,
      truck: truckdetails_reducer,
      alert: alert_reducer,
      step: stepper_reducer,
      modalStatus: ModalReducer,
      page: page_reducer,
      toggle: Toggler,
    })
  );
  return store;
};
