const defaultState = 0;

export default (state = defaultState, action) => {
  switch (action.type) {
    case "thepage":
      return (state = action.page);
    default:
      return state;
  }
};
