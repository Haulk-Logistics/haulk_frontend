export const OrderDetails = ({
  orderStatus,
  natureOfGoods,
  pickupLoc,
  dropoffLoc,
  pickupDate,
  containerNo,
  shippingLine,
  Pay,
}) => ({
  type: "orderdetails",
  orderStatus,
  natureOfGoods,
  pickupLoc,
  dropoffLoc,
  pickupDate,
  containerNo,
  shippingLine,
  Pay,
});
