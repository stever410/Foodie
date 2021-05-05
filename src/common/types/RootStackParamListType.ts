import {NavigatorScreenParams} from '@react-navigation/core';
import {Component} from 'react';
import {BottomNavParamList} from './BottomNavParamList';

export type RootStackParamList = {
  Welcome: Component;
  Login: Component;
  Home: NavigatorScreenParams<BottomNavParamList>;
};
