import {NavigatorScreenParams} from '@react-navigation/core';
import {Component} from 'react';
import {DrawerParamList} from './DrawerParamList';

export type BottomNavParamList = {
  Home: NavigatorScreenParams<DrawerParamList>;
  Love: Component;
  User: Component;
  History: Component;
};
