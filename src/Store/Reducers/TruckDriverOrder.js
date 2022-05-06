const initialState = {
  loading: false,
  openOrders: null,
  error: null,
  profile: null,
  activeOrder: null,
  orderHistory: null,
  oneOpenOrder: null,
  acceptOrder: null
};

export const truckDriverReducer = (state = initialState, action) => {
  switch (action.type) {
    case "truckDriverOrderLoading":
      return {
        ...state,
        loading: true,
      };
    case "truckDriverOrders":
      return {
        ...state,
        loading: false,
        openOrders: action.payload,
      };
    case "truckDriverProfile":
      return {
        ...state,
        loading: false,
        profile: action.payload,
      };
    case "truckDriverOrderHistory":
      return {
        ...state,
        loading: false,
        orderHistory: action.payload,
      };
    case "truckDriverOneOpenOrder":
      return {
        ...state,
        loading: false,
        oneOpenOrder: state.openOrders && state.openOrders.find(x => x._id === action.payload),
      }
    case "truckDriverOrderAccept":
      return {
        ...state,
        loading: false,
        acceptOrder: action.payload
      }
    case "truckDriverActiveOrder":
      return {
        ...state,
        loading: false,
        activeOrder: action.payload
      }

    case "truckDriverOrderError":
      console.log(action.payload, "erorrr")
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
