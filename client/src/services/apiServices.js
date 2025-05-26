import axios from 'axios';
export const apiServices = {
    get: async (route) => {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/${route}`);
        return res.data;
    }
}  