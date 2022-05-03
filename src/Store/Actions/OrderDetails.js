export const OrderDetails = ({
  nature_of_goods,
  pick_off_location,
  drop_off_location,
  amount,
  _id,
  truck_driver,
  ordered_at,
  order_status,
}) => ({
  type: "orderdetails",
  _id,
  nature_of_goods,
  pick_off_location,
  drop_off_location,
  amount,
  truck_driver,
  ordered_at,
  order_status
});
