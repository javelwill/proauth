import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {MainStackNavigatorParamList} from './main.types';

const Stack = createNativeStackNavigator<MainStackNavigatorParamList>();

const MainStackNavigator = () => {
  return <Stack.Navigator></Stack.Navigator>;
};

export default MainStackNavigator;
