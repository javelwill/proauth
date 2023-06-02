import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {MainStackNavigatorParamList} from './main.types';
import HomeScreen from '../../screens/home/home.screen';

const Stack = createNativeStackNavigator<MainStackNavigatorParamList>();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
