import axios from 'axios';
import setAuthToken from '../../Utils/setAuthToken';
import { loaderStatus } from './ModalStatus';

export const truckDriverOrderHistory = () => async (dispatch) => {
    dispatch({
        type: "truckDriverOrderLoading",
    });
    const token = JSON.parse(localStorage.getItem('haulk-app-auth'));
    if (token) {
        setAuthToken(token);
    }
    try {
        const { data } = await axios.get('https://haulk.herokuapp.com/api/driver/order_history');
        data && dispatch(loaderStatus(false))
        dispatch({
            type: "truckDriverOrderHistory",
            payload: data && data.message
        });
    } catch (error) {
        dispatch({
            type: "truckDriverOrderError",
            payload: error.message
        })
    }
}

export const truckDriverProfile = () => async (dispatch) => {
    dispatch({
        type: "truckDriverOrderLoading",
    });
    const token = JSON.parse(localStorage.getItem('haulk-app-auth'));
    if (token) {
        setAuthToken(token);
    }
    try {
        const { data } = await axios.get('https://haulk.herokuapp.com/api/driver/view_profile');
        data && dispatch(loaderStatus(false))
        dispatch({
            type: "truckDriverProfile",
            payload: data && data.message
        });
    } catch (error) {
        dispatch({
            type: "truckDriverOrderError",
            payload: error.message
        })
    }
}

export const truckDriverActiveOrder = () => async (dispatch) => {
    dispatch({
        type: "truckDriverOrderLoading",
    });
    const token = JSON.parse(localStorage.getItem('haulk-app-auth'));
    if (token) {
        setAuthToken(token);
    }
    try {
        const { data } = await axios.get('https://haulk.herokuapp.com/api/driver/active_order');
        data && dispatch(loaderStatus(false))
        dispatch({
            type: "truckDriverActiveOrder",
            payload: data && data.message
        });
    } catch (error) {
        console.log(error)
        dispatch({
            type: "truckDriverOrderError",
            payload: error.message
        })
    }
}

export const truckDriverOpenOrders = () => async (dispatch) => {
    dispatch({
        type: "truckDriverOrderLoading",
    });
    const token = JSON.parse(localStorage.getItem('haulk-app-auth'));
    if (token) {
        setAuthToken(token);
    }
    try {
        const { data } = await axios.get('https://haulk.herokuapp.com/api/driver/seeopenorders');
        data && dispatch(loaderStatus(false))
        dispatch({
            type: "truckDriverOrders",
            payload: data && data.message
        });
    } catch (error) {
        dispatch({
            type: "truckDriverOrderError",
            payload: error.message
        })
    }
}


export const getOneOpenOrder = (id) => async (dispatch) => {
    dispatch({
        type: "truckDriverOrderLoading"
    });
    dispatch({
        type: "truckDriverOneOpenOrder",
        payload: id
    })
}

export const truckDriverAcceptOrder = (id) => async (dispatch) => {
    dispatch({
        type: "truckDriverOrderLoading",
    });
    const token = JSON.parse(localStorage.getItem('haulk-app-auth'));
    if (token) {
        setAuthToken(token);
    }
    try {
        const { data } = await axios.put(`https://haulk.herokuapp.com/api/driver/acceptorder/${id}`);
        data && dispatch(loaderStatus(false))
        dispatch({
            type: "truckDriverOrderAccept",
            payload: data && data.message
        });
    } catch (error) {
        console.log(error.message, "error.....")
        dispatch({
            type: "truckDriverOrderError",
            payload: error.message
        })
    }
}

// export const updateOrderStatus = (id) => async (dispatch) => {
//     dispatch({
//         type: "updateOrderStatus",
//     });
//     const token = JSON.parse(localStorage.getItem('haulk-app-auth'));
//     if (token) {
//         setAuthToken(token);
//     }
//     try {
//         const { data } = await axios.put(`https://haulk.herokuapp.com/api/driver/update_order_status/62693d2f9f699da12dcae1a8`);
//         data && dispatch(loaderStatus(false))
//         dispatch({
//             type: "truckDriverOrderAccept",
//             payload: data && data.message
//         });
//     } catch (error) {
//         console.log(error.message, "error.....")
//         dispatch({
//             type: "truckDriverOrderError",
//             payload: error.message
//         })
//     }
// }