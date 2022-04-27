const defaultState = {
  status: false,
  message: "",
  link: "",
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "modal":
      return {
        status: action.status,
        message: action.message,
        link: action.link,
      };
    default:
      return state;
  }
};
