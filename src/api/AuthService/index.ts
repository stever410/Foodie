import {AxiosResponse} from 'axios';
import {JwtResponse} from '../../dto/JwtResponse';
import axios from '../../helpers/axios';
import {User} from '../../models/User';

const AuthService = {
  async login({email, password}: User): Promise<AxiosResponse<JwtResponse>> {
    return await axios.post('/auth/login', {
      username: email,
      password,
    });
  },
};

export default AuthService;
