import axios from 'axios';

export const getQuotation = async(data) => {
    try {
        const result = await axios.post('https://haulk.herokuapp.com/api/get_quotation', data);
        return result
    } catch (error) {
        console.log(error.response.data.errors)
        throw error;
    }
}