import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const TemplateNameScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>TemplateNameScreen</Text>
    </SafeAreaView>
  );
};

export default TemplateNameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
