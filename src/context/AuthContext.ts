import {createContext} from 'react';
import {UserToken} from '../dto/UserToken';

type AuthContextProps = {
  userToken: UserToken | null;
  setUserToken: Function;
};

const AuthContext = createContext<AuthContextProps>({
  userToken: null,
  setUserToken: () => {},
});

export default AuthContext;
