import { combineReducers, createStore } from "redux";
import status_reducer from "../Reducers/status_reducer";

export default () => {
  const store = createStore(
    combineReducers({
      status: status_reducer,
    })
  );
  return store;
};
