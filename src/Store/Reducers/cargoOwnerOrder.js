const initialState = {
    loading: false,
    orders: null,
    error: null,
    active: null,
    pending: null,
    completed: null,
    orderHistory: null
}

export const cargoOwnerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "cargoOwnerOrderLoading":
            return {
                ...state,
                loading: true
            }
        case "cargoOwnerOrders":
            return {
                ...state,
                loading: false,
                orders: action.payload,
                active: action.payload.filter(x => x.order_status === ("accepted" || "picked_up" || "in_transit")),
                completed: action.payload.filter(x => x.order_status === "dropped_off"),
                pending: action.payload.filter(x => x.order_status !== ("accepted" || "picked_up" || "in_transit")),
            }
        case "cargoOwnerOrderHistory":
            return {
                ...state,
                loading: false,
                orderHistory: action.payload,
            }
        case "cargoOwnerOrderError":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case "cargoOwnerdetails":
            return {
                ...state,
                cargoOwner: action.payload

            }

        case "cargoOwnerActiveOrders":
            return {
                ...state,
                OrderDetails: action.payload
            }
        default:
            return state
    }
}