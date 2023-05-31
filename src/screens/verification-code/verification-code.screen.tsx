import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const VerificationCodeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>VerificationCodeScreen</Text>
    </SafeAreaView>
  );
};

export default VerificationCodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
