const defaultState = {
  amount: "",
  containerNo: "",
  containerSize: "",
  dropoffLoc: "",
  natureOfGoods: "",
  orderStatus: "",
  userId: "",
  pickupLoc: "",
  pickupDate: "",
  cargoImage: "",
  shippingLine: "",
  transaction: "",
  truckType: "",
  id: "",
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "orderdetails":
      return {
        ...state,
        id: action._id,
        orderStatus: action.order_status,
        natureOfGoods: action.nature_of_goods,
        pickupLoc: action.pick_off_location,
        dropoffLoc: action.drop_off_location,
        amount: action.amount,
        driverImage: action.truck_driver_image,
        driverName: action.truck_driver_name,
        driverPhoneno: action.truck_driver_phone,
        plateNo: action.truck_driver_truck_number,
        orderedDate: action.ordered_at
      };
    default:
      return state;
  }
};
