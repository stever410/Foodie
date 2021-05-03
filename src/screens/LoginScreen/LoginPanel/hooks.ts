import {useContext} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {ToastAndroid} from 'react-native';
import AuthService from '../../../api/AuthService';
import AuthContext from '../../../context/AuthContext';
import useToken from '../../../utils/TokenUtils';

export type LoginFormData = {
  email: string;
  password: string;
};

const useHooks = () => {
  const {saveToken} = useToken();
  const {handleSubmit, control} = useForm<LoginFormData>();
  const {setUserToken} = useContext(AuthContext);

  const handleLogin: SubmitHandler<LoginFormData> = async userLoginInfo => {
    try {
      const {data} = await AuthService.login(userLoginInfo);
      await saveToken(data);
      setUserToken(data);
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
