import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LandingScreen from '../../src/screens/landing/landing.screen';
import PhoneNumberScreen from '../../src/screens/phone-number/phone-number.screen';
import VerificationCodeScreen from '../../src/screens/verification-code/verification-code.screen';

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
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
