import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthStackNavigatorParamList = {
  Landing: undefined;
  PhoneNumber: undefined;
  VerificationCode: {phoneNumber: string};
};

export type AuthStackNavigatorScreenProps<
  T extends keyof AuthStackNavigatorParamList
> = NativeStackScreenProps<AuthStackNavigatorParamList, T>;
