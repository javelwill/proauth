import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type TemplateNameStackNavigatorParamList = {};

export type TemplateNameStackNavigatorScreenProps<
  T extends keyof TemplateNameStackNavigatorParamList
> = NativeStackScreenProps<TemplateNameStackNavigatorParamList, T>;
