import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type AppTextProps = {
  children: React.ReactNode;
};

const AppText = ({children}: AppTextProps) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
