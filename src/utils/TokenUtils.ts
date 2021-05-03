import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserToken} from '../dto/UserToken';

const getUserToken = async () => {
  const tokenString = await AsyncStorage.getItem('token');
  if (tokenString) {
    const userToken: UserToken = JSON.parse(tokenString);
    return userToken;
  }
  return null;
};

const saveToken = async (userToken: UserToken) => {
  await AsyncStorage.setItem('token', JSON.stringify(userToken));
};

const deleteToken = async () => {
  await AsyncStorage.clear();
};

export {saveToken, deleteToken, getUserToken};
