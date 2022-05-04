import axios from 'axios';
import { loaderStatus } from './ModalStatus';
import setAuthToken from '../../Utils/setAuthToken';

export const getAllDrivers = () => async (dispatch) => {
    dispatch({
        type: "adminLoading",
    });
    const token = JSON.parse(localStorage.getItem('haulk-app-auth'));
    if (token) {
        setAuthToken(token);
    }
    try {
        const { data } = await axios.get('https://haulk.herokuapp.com/admin/driver/awaiting_approval');
        console.log(data)
        data && dispatch(loaderStatus(false))
        dispatch({
            type: "allDrivers",
            payload: data && data.truckDrivers
        });
    } catch (error) {
        dispatch({
            type: "cargoOwnerOrderError",
            payload: error.message
        })
    }
}