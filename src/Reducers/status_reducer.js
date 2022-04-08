const defaultuser = "cargo_owner";

export default (state = defaultuser, action) => {
  switch (action.type) {
    case "user":
      return (state = action.user);
    default:
      return state;
  }
};
