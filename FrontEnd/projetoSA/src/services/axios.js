import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3001"
});

export default api;

// dev andrey: "http://10.0.2.2:3030/"