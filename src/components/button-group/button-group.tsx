import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type ButtonGroupProps = {
  children: React.ReactNode;
};

const ButtonGroup = ({children}: ButtonGroupProps) => {
  return <View style={styles.buttonGroup}>{children}</View>;
};

export default ButtonGroup;

const styles = StyleSheet.create({
  buttonGroup: {
    flex: 1,
    justifyContent: 'flex-end',
    gap: 10,
  },
});
