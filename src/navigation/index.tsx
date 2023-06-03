import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthStackNavigator from './auth/auth.navigator';
import MainStackNavigator from './main/main.navigator';
import {useAuthContext} from '../services/auth/auth.context';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const Navigation = () => {
  const {user} = useAuthContext();
  return (
    <NavigationContainer theme={theme}>
      {!!user ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
