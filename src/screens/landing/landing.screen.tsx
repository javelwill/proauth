import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const LandingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>LandingScreen</Text>
    </SafeAreaView>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
