import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from 'react-native-dotenv';
import {UserToken} from '../dto/UserToken';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'content-type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(async config => {
  const tokenString = await AsyncStorage.getItem('token');
  if (tokenString) {
    const token: UserToken = JSON.parse(tokenString);
    config.headers.Authorization = 'Bearer ' + token.token;
  }
  return {
    ...config,
    headers: {
      ...config.headers,
    },
  };
});

export default axiosInstance;
