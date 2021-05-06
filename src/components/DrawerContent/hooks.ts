import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import {useContext} from 'react';
import AuthContext from '../../context/AuthContext';
import {deleteToken} from '../../utils/TokenUtils';

const drawerItemsList = [
  {
    name: 'Profile',
    icon: 'account-circle-outline',
  },
  {
    name: 'Orders',
    icon: 'cart-arrow-down',
  },
  {
    name: 'Promotions',
    icon: 'tag-outline',
  },
  {
    name: 'Privacy policy',
    icon: 'file-document-outline',
  },
  {
    name: 'Options',
    icon: 'cog-outline',
  },
];

const useHooks = (props: DrawerContentComponentProps<DrawerContentOptions>) => {
  const userContext = useContext(AuthContext);

  const handleLogOut = () => {
    deleteToken();
    userContext.setUserToken(null);
  };

  return {
    states: {
      drawerItemsList,
    },
    handlers: {
      handleLogOut,
    },
  };
};

export default useHooks;
