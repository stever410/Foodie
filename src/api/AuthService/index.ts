import {AxiosResponse} from 'axios';
import {UserToken} from '../../dto/UserToken';
import {SuccessResponse} from '../../dto/SuccessResponse';
import axios from '../../helpers/axios';
import {LoginFormData} from '../../screens/LoginScreen/LoginPanel/hooks';
import {RegisterFormData} from '../../screens/LoginScreen/RegisterPanel/hooks';

const AuthService = {
  async login({
    email,
    password,
  }: LoginFormData): Promise<AxiosResponse<UserToken>> {
    return await axios.post('/auth/login', {
      username: email,
      password,
    });
  },
  async register({
    firstName,
    lastName,
    email,
    password,
  }: RegisterFormData): Promise<AxiosResponse<SuccessResponse>> {
    return await axios.post('/auth/register', {
      firstName,
      lastName,
      email,
      password,
    });
  },
};

export default AuthService;
