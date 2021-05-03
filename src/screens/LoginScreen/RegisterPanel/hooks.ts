import {useState} from 'react';
import {
  DeepMap,
  FieldError,
  RegisterOptions,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import {ToastAndroid} from 'react-native';
import AuthService from '../../../api/AuthService';
import {isEmail} from '../../../utils/ValidationUtils';

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type RegisterFormValidationRules = {
  [Property in keyof RegisterFormData]: RegisterOptions;
};

const useHooks = () => {
  const {handleSubmit, control, getValues, reset} = useForm<RegisterFormData>();
  const [errors, setErrors] = useState<DeepMap<RegisterFormData, FieldError>>(
    {},
  );

  const validationRules: RegisterFormValidationRules = {
    firstName: {required: 'First name is required'},
    lastName: {required: 'Last name is required'},
    email: {validate: email => isEmail(email) || 'Invalid email'},
    password: {
      required: 'Password is required',
      minLength: {value: 5, message: 'Password min length is 6'},
    },
    confirmPassword: {
      validate: confirmPassword =>
        confirmPassword === getValues('password') ||
        "Confirm password doesn't match password",
    },
  };

  const handleRegister: SubmitHandler<RegisterFormData> = async registerUserData => {
    try {
      const {data} = await AuthService.register(registerUserData);
      ToastAndroid.show(data.message, ToastAndroid.SHORT);
      reset();
    } catch (error) {
      ToastAndroid.show(error.response.data.message, ToastAndroid.SHORT);
    }
  };

  const handleErrors: SubmitErrorHandler<RegisterFormData> = formErrors => {
    setErrors(formErrors);
  };

  return {
    states: {
      control,
      validationRules,
      errors,
    },
    handlers: {
      handleSubmit,
      handleRegister,
      handleErrors,
    },
  };
};

export default useHooks;
