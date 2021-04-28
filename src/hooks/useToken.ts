import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {UserToken} from '../dto/UserToken';

export default () => {
  const [token, setToken] = useState<UserToken | null>();

  useEffect(() => {
    getUserToken();
  }, []);

  const getUserToken = async () => {
    const tokenString = await AsyncStorage.getItem('token');
    if (tokenString) {
      const userToken: UserToken = JSON.parse(tokenString);
      setToken(userToken);
    }
  };

  const saveToken = async (userToken: UserToken) => {
    await AsyncStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken);
  };

  const deleteToken = async () => {
    await AsyncStorage.clear();
    setToken(null);
  };
  return {
    token,
    saveToken,
    deleteToken,
  };
};
