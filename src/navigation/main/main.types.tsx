import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type MainStackNavigatorParamList = {
  Home: undefined;
};

export type MainStackNavigatorScreenProps<
  T extends keyof MainStackNavigatorParamList
> = NativeStackScreenProps<MainStackNavigatorParamList, T>;
