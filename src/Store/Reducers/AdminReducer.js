const intialState = {
  loading: false,
  drivers: null,
  verified_drivers: null,
  unverified_drivers: null,
  drivers_num: 0,
  completedOrders: 0,
  cargoowners_num: 0,
  accepted: "",
  rejected: "",
  oneDriver: null,
  error: null,
  id: "",
};

export const AdminReducer = (state = intialState, action) => {
  switch (action.type) {
    case "adminLoading":
      return {
        ...state,
        loading: true,
      };
    case "allDrivers":
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        unverified_drivers: action.payload,
      };
    case "allVerifiedDrivers":
      return {
        ...state,
        loading: false,
        verified_drivers: action.payload,
      };
    case "Drivers":
      return {
        ...state,
        loading: false,
        drivers_num: action.payload,
      };
    case "driverId":
      return {
        ...state,
        id: action.payload,
      };
    case "allCargoowners":
      return {
        ...state,
        loading: false,
        cargoowners_num: action.payload,
      };
    case "acceptDriver":
      return {
        ...state,
        loading: false,
        accepted: action.payload,
      };
    case "rejectDriver":
      return {
        ...state,
        loading: false,
        rejected: action.payload,
      };
    case "allCompletedOrders":
      return {
        ...state,
        loading: false,
        completedOrders: action.payload,
      };
    case "oneDriver":
       return {
           ...state,
           loading: false,
           oneDriver: action.payload
       };
    case "adminError":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
