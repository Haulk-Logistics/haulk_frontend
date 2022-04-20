const defaultstate = {};

export default (state = defaultstate, action) => {
  switch (action.type) {
    case "truckdetails":
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};
