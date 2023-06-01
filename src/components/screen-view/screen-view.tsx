import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type ScreenViewProps = {
  children: React.ReactNode;
};

const ScreenView = ({children}: ScreenViewProps) => {
  return <SafeAreaView style={styles.screenView}>{children}</SafeAreaView>;
};

export default ScreenView;

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    padding: 20,
  },
});
