const defaultState = {
  status: false,
  orderStatus: false,
  loading: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case "modal":
      return {
        ...state,
        status: action.status,
        message: action.message,
        link: action.link,
      };
    case "ordermodal":
      return {
        ...state,
        orderStatus: action.status
      }

    case "loaderStatus":
      return {
        ...state,
        loading: action.status
      }
    default:
      return state;
  }
};
