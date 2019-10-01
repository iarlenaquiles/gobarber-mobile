import axios from 'axios';

const api = axios.create({
  baseURL: 'https://192.168.11.11:3333',
});

export default api;
