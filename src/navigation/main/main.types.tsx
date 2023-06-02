import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type MainStackNavigatorParamList = {};

export type MainStackNavigatorScreenProps<
  T extends keyof MainStackNavigatorParamList
> = NativeStackScreenProps<MainStackNavigatorParamList, T>;
