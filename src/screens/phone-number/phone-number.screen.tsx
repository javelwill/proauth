import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const PhoneNumberScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>PhoneNumberScreen</Text>
    </SafeAreaView>
  );
};

export default PhoneNumberScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
