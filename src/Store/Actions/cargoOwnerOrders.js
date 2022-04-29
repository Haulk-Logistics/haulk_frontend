import axios from 'axios';
import setAuthToken from '../../Utils/setAuthToken';

export const cargoOwnerOrder = () => async (dispatch) => {
    dispatch({
        type: "cargoOwnerOrderLoading",
    });
    const token = JSON.parse(localStorage.getItem('haulk-app-auth'));
    if(token) {
        setAuthToken(token);
    }
    try {
        const  {data}  = await axios.get('https://haulk.herokuapp.com/api/cargoowner/all_orders');
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
    if(token) {
        setAuthToken(token);
    }
    try {
        const  {data}  = await axios.get('https://haulk.herokuapp.com/api/cargoowner/order_history');
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