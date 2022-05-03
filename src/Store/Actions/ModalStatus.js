export const modalStatus = ({ status, message, link }) => ({
  type: "modal",
  status,
  message,
  link,
});

export const orderModalStatus = (status) => ({
  type: "ordermodal",
  status
});

export const loaderStatus = (status) => ({
  type: "loaderStatus",
  status
});
