import axios from 'axios';
import {API_URL} from 'react-native-dotenv';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export default axiosInstance;
