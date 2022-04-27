const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "orderdetails":
      return {
        orderStatus: action.orderStatus,
        natureOfGoods: action.natureOfGoods,
        pickupLoc: action.pickupLoc,
        dropoffLoc: action.dropoffLoc,
        pickupDate: action.pickupDate,
        containerNo: action.containerNo,
        pay: action.pay,
      };
    default:
      return state;
  }
};
