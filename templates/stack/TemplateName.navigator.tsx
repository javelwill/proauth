import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {TemplateNameStackNavigatorParamList} from './template-name.types';

const Stack = createNativeStackNavigator<TemplateNameStackNavigatorParamList>();

const TemplateNameStackNavigator = () => {
  return <Stack.Navigator></Stack.Navigator>;
};

export default TemplateNameStackNavigator;
