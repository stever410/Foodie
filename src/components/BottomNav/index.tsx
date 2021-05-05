import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import {Icon} from 'react-native-elements';
import LoveScreen from '../../screens/LoveScreen';
import Color from '../../constants/colors.enum';
import AppDrawer from '../../screens/AppDrawer';

const Tab = createBottomTabNavigator();

const BottomNav: React.FC = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color}) => {
        let iconName = '';
        switch (route.name) {
          case 'Home':
            iconName = focused ? 'home' : 'home-outline';
            break;
          case 'Love':
            iconName = focused ? 'heart' : 'heart-outline';
            break;
          case 'User':
            iconName = focused ? 'account' : 'account-outline';
            break;
          case 'History':
            iconName = 'history';
            break;
          default:
            throw new Error();
        }
        return (
          <Icon
            type="material-community"
            name={iconName}
            color={color}
            size={28}
          />
        );
      },
    })}
    tabBarOptions={{
      showLabel: false,
      activeTintColor: Color.Orange1,
      inactiveTintColor: Color.Gray1,
      style: {
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        elevation: 0,
      },
    }}>
    <Tab.Screen name="Home" component={AppDrawer} />
    <Tab.Screen name="Love" component={LoveScreen} />
    <Tab.Screen name="User" component={HomeScreen} />
    <Tab.Screen name="History" component={HomeScreen} />
  </Tab.Navigator>
);

export default BottomNav;
