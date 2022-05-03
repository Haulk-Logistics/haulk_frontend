const defaultstate = {};

export default (state = defaultstate, action) => {
  switch (action.type) {
    case "ordersummary":
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};
