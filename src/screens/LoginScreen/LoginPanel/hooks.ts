import {StackNavigationProp} from '@react-navigation/stack';
import {SubmitHandler, useForm} from 'react-hook-form';
import {ToastAndroid} from 'react-native';
import AuthService from '../../../api/AuthService';
import {RootStackParamList} from '../../../common/types/RootStackParamListType';
import useToken from '../../../hooks/useToken';

export type LoginFormData = {
  email: string;
  password: string;
};

export interface Props {
  navigation: StackNavigationProp<RootStackParamList>;
}

const useHooks = (props: Props) => {
  const {
    navigation: {navigate},
  } = props;
  const {saveToken} = useToken();
  const {handleSubmit, control} = useForm<LoginFormData>();

  const handleLogin: SubmitHandler<LoginFormData> = async userLoginInfo => {
    try {
      const {data} = await AuthService.login(userLoginInfo);
      await saveToken(data);
      navigate('Home', {});
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
