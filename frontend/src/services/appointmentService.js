import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/appointments/';

const getAppointments = (params = {}) => {
    return axios.get(API_URL, { params });
};


export default {
    getAppointments,
};
