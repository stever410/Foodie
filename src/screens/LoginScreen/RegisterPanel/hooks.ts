import {useForm} from 'react-hook-form';
import {ToastAndroid} from 'react-native';
import AuthService from '../../../api/AuthService';
import type {User} from '../../../models/User';

const useHooks = () => {
  const {handleSubmit, control} = useForm();

  const handleLogin = async (userLoginInfo: User) => {
    try {
      const {data} = await AuthService.login(userLoginInfo);
      ToastAndroid.show(data.id, ToastAndroid.SHORT);
    } catch (error) {
      ToastAndroid.show(error.response.data.message, ToastAndroid.SHORT);
    }
  };

  return {
    states: {
      control,
    },
    handlers: {
      handleSubmit,
      handleLogin,
    },
  };
};

export default useHooks;
