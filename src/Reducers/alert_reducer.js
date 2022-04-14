const initialState = {
  type: null,
  message: "",
  title: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "success":
      return {
        type: action.type,
        message: action.payload.message,
        title: action.payload.title,
      };
    case "error":
      return {
        type: action.type,
        message: action.payload.message,
        title: action.payload.title,
      };
    case "close_modal":
      return initialState;
    default:
      return state;
  }
};
