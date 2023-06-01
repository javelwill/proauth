import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

type AppInputProps = TextInputProps;

const AppInput = ({...props}: AppInputProps) => {
  return <TextInput style={styles.input} {...props} />;
};

export default AppInput;

const styles = StyleSheet.create({
  input: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
