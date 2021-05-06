import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import {useContext} from 'react';
import AuthContext from '../../context/AuthContext';
import {deleteToken} from '../../utils/TokenUtils';

export interface Props {
  props: DrawerContentComponentProps<DrawerContentOptions>;
}

const useHooks = (props: Props) => {
  const userContext = useContext(AuthContext);

  const handleLogOut = () => {
    deleteToken();
    userContext.setUserToken(null);
  };

  return {
    handlers: {
      handleLogOut,
    },
  };
};

export default useHooks;
