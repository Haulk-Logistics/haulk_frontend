import axios from 'axios';
import setAuthToken from '../../Utils/setAuthToken';

export const truckDriverOrderHistory = () => async (dispatch) => {
    dispatch({
        type: "truckDriverOrderLoading",
    });
    const token = JSON.parse(localStorage.getItem('haulk-app-auth'));
    if(token) {
        setAuthToken(token);
    }
    try {
        const  {data}  = await axios.get('https://haulk.herokuapp.com/api/driver/order_history');
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
    if(token) {
        setAuthToken(token);
    }
    try {
        const  {data}  = await axios.get('https://haulk.herokuapp.com/api/driver/view_profile');
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
    if(token) {
        setAuthToken(token);
    }
    try {
        const  {data}  = await axios.get('https://haulk.herokuapp.com/api/driver/active_order');
        console.log('idd')
        console.log(data, "Active................")
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
    if(token) {
        setAuthToken(token);
    }
    try {
        const  {data}  = await axios.get('https://haulk.herokuapp.com/api/driver/seeopenorders');
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

export const getOneOpenOrder = (id) => async (dispatch) =>  {
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
    if(token) {
        setAuthToken(token);
    }
    try {
        const  {data}  = await axios.put(`https://haulk.herokuapp.com/api/driver/acceptorder/${id}`);
        console.log(data, "data......");
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