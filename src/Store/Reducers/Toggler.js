const defaultState = false;

export default (state = defaultState, action) => {
  switch (action.type) {
    case "toggle":
      return (state = action.status);
    default:
      return state;
  }
};
