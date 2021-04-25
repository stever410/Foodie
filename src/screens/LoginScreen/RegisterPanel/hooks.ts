import {useForm} from 'react-hook-form';
import {ToastAndroid} from 'react-native';
import AuthService from '../../../api/AuthService';

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const useHooks = () => {
  const {handleSubmit, control} = useForm<RegisterFormData>();
  const handleRegister = async (registerUserData: RegisterFormData) => {
    console.log({registerUserData});
    try {
      // const {data} = await AuthService.register(registerUserData);
      // ToastAndroid.show(data.message, ToastAndroid.SHORT);
    } catch (error) {
      console.log({error});
      ToastAndroid.show(error.response.data.message, ToastAndroid.SHORT);
    }
  };

  return {
    states: {
      control,
    },
    handlers: {
      handleSubmit,
      handleRegister,
    },
  };
};

export default useHooks;
