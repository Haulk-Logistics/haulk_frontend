const defaultState = {
  status: false,
  message: "",
  link: "",
};

export default (state = defaultState, action) => {
  console.log(action.message, action.link);
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
