import axios from 'axios';

const Base_URL = 'http://localhost:4000';

export const apiServices = {
    get: async (route) => {
        const res = await axios.get(`${Base_URL}/${route}`);
        return res.data;
    }
}  