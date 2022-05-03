const defaultState = "";

export default (state = defaultState, action) => {
  // console.log(state);
  switch (action.type) {
    case "render":
      return (state = action.feature);
    default:
      return state;
  }
};
