import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type SpacerProps = {
  size?: number;
  horizontal?: boolean;
};

const Spacer = ({size = 32, horizontal = false}: SpacerProps) => {
  return (
    <View
      style={{
        height: horizontal ? 'auto' : size,
        width: horizontal ? size : 'auto',
      }}
    ></View>
  );
};

export default Spacer;

const styles = StyleSheet.create({});
