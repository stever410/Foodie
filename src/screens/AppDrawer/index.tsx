import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../HomeScreen';
import DrawerContent from '../../components/DrawerContent';

const Drawer = createDrawerNavigator();

const AppDrawer = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerContent={props => <DrawerContent {...props} />}>
    <Drawer.Screen name="Home" component={HomeScreen} />
  </Drawer.Navigator>
);

export default AppDrawer;
