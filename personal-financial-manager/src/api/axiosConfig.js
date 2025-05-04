import axios from 'axios';
import { getToken } from '../auth/useAuth';

const instance = axios.create({
  baseURL: 'http://localhost:5000',
});

instance.interceptors.request.use(config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;