import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LandingScreen from '../../screens/landing/landing.screen';
import PhoneNumberScreen from '../../screens/phone-number/phone-number.screen';
import VerificationCodeScreen from '../../screens/verification-code/verification-code.screen';

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="PhoneNumber" component={PhoneNumberScreen} />
      <Stack.Screen
        name="VerificationCode"
        component={VerificationCodeScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
