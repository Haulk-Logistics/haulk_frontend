const intialState = {
    loading: false,
    drivers: null,
    verified_drivers: null,
    unverified_drivers: null,
    error: null
}

export const  AdminReducer = (state = intialState, action) => {
    switch (action.type) {
        case "adminLoading" : 
        return {
            ...state,
            loading: true
        }
        case "allDrivers" : 
        return {
            ...state,
            loading: false,
            unverified_drivers: action.payload
        }
        case "adminError" : 
        return {
            ...state,
            loading: false,
            error: action.payload
        }
        default :
        return state
    }
}   