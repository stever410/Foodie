import {AxiosResponse} from 'axios';
import {UserToken} from '../../dto/UserToken';
import axios from '../../helpers/axios';
import {LoginFormData} from '../../screens/LoginScreen/LoginPanel/hooks';

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
};

export default AuthService;
