import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthStackNavigator from './auth/auth.navigator';
import MainStackNavigator from './main/main.navigator';

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
      {true ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
