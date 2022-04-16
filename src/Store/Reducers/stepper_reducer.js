const defaultstate = 0;

export default (state = defaultstate, action) => {
  switch (action.type) {
    case "step":
      return (state = action.step);
    default:
      return state;
  }
};
