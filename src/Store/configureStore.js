import { combineReducers, createStore, applyMiddleware } from "redux";
import status_reducer from "./Reducers/status_reducer";
import truckdetails_reducer from "./Reducers/truckdetails_reducer";
import stepper_reducer from "./Reducers/stepper_reducer";
import ModalReducer from "./Reducers/ModalReducer";
import page_reducer from "./Reducers/page_reducer";
import alert_reducer from "./Reducers/alert_reducer";
import Toggler from "./Reducers/Toggler";
import OrderDetailsReducer from "./Reducers/OrderDetailsReducer";
import DashboardRenderReducer from "./Reducers/DashboardRenderReducer";
import OrderSummaryReducer from "./Reducers/OrderSummaryReducer";
import { cargoOwnerReducer } from "./Reducers/cargoOwnerOrder";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { AdminReducer } from "./Reducers/AdminReducer";

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
      orderdetail: OrderDetailsReducer,
      dashboardRender: DashboardRenderReducer,
      summary: OrderSummaryReducer,
      cargoOwnerOrders: cargoOwnerReducer,
      admin: AdminReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
};
