import {AxiosResponse} from 'axios';
import {SuccessResponse} from '../../dto/SuccessResponse';
import axios from '../../helpers/axios';
import {RegisterFormData} from '../../screens/LoginScreen/RegisterPanel/hooks';

const UserService = {
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

export default UserService;
