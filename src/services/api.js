import axios from 'axios';
import * as AuthService from './AuthService';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

api.interceptors.request.use(
  config => {
    config.headers.Authorization = `Bearer ${AuthService.usersData().tokenId}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)

export default api;