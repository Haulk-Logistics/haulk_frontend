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
  driver: null,
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
        driver: action.truck_driver,
        orderedDate: action.ordered_at
      };

    case "cargoOwnerActiveOrders":
      return {
        ...state,
      }
    default:
      return state;
  }
};
