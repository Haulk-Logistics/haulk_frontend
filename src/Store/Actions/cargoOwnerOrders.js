import axios from 'axios';
import setAuthToken from '../../Utils/setAuthToken';
import { loaderStatus } from './ModalStatus';


export const cargoOwnerOrder = () => async (dispatch) => {
    dispatch({
        type: "cargoOwnerOrderLoading",
    });
    const token = JSON.parse(localStorage.getItem('haulk-app-auth'));
    if (token) {
        setAuthToken(token);
    }
    try {
        const { data } = await axios.get('https://haulk.herokuapp.com/api/cargoowner/all_orders');
        data && dispatch(loaderStatus(false))
        dispatch({
            type: "cargoOwnerOrders",
            payload: data && data.all_orders
        });
    } catch (error) {
        dispatch({
            type: "cargoOwnerOrderError",
            payload: error.message
        })
    }
}

export const cargoOwnerOrderHistory = () => async (dispatch) => {
    dispatch({
        type: "cargoOwnerOrderLoading",
    });
    const token = JSON.parse(localStorage.getItem('haulk-app-auth'));
    if (token) {
        setAuthToken(token);
    }
    try {
        const { data } = await axios.get('https://haulk.herokuapp.com/api/cargoowner/order_history');
        data && dispatch(loaderStatus(false))
        dispatch({
            type: "cargoOwnerOrderHistory",
            payload: data && data.message
        });
    } catch (error) {
        dispatch({
            type: "cargoOwnerOrderError",
            payload: error.message
        })
    }
}


export const CargoOwnerDetails = () => async (dispatch) => {
    dispatch({
        type: "cargoOwnerdetails",
    });
    const token = JSON.parse(localStorage.getItem('haulk-app-auth'));
    if (token) {
        setAuthToken(token);
    }
    try {
        const { data } = await axios.get('https://haulk.herokuapp.com/api/cargoowner/profile');
        // console.log(data.message[0])
        data && dispatch(loaderStatus(false))
        dispatch({
            type: "cargoOwnerdetails",
            payload: data && data.message
        });
    } catch (error) {
        dispatch({
            type: "cargoOwnerdetails",
            payload: error.message
        })
    }
}

export const CargoOwnerActiveOrders = () => async (dispatch) => {
    dispatch({
        type: "cargoOwnerActiveOrders",
    });
    const token = JSON.parse(localStorage.getItem('haulk-app-auth'));
    if (token) {
        setAuthToken(token);
    }
    try {
        const { data } = await axios.get("https://haulk.herokuapp.com/api/cargoowner/active_orders",);
        // console.log(data)
        data && dispatch(loaderStatus(false))
        dispatch({
            type: "cargoOwnerActiveOrders",
            payload: data && data.data
        });
    } catch (error) {
        dispatch({
            type: "cargoOwnerActiveOrders",
            payload: error.message
        })
    }
}

