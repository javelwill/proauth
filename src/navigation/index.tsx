import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthStackNavigator from './auth/auth.navigator';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const Navigation = () => {
  return (
    <NavigationContainer theme={theme}>
      <AuthStackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
