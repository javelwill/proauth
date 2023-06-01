import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import {MotiPressable} from 'moti/interactions';

type AppButtonProps = {
  label: string;
  onPress: () => void;
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
};

const AppButton = ({
  label,
  onPress,
  backgroundColor = 'black',
  color = 'white',
  borderColor = 'transparent',
}: AppButtonProps) => {
  const animate = useMemo(
    () =>
      ({hovered, pressed}: any) => {
        'worklet';

        return {
          scale: hovered || pressed ? 0.95 : 1,
        };
      },
    []
  );

  return (
    <MotiPressable onPress={onPress} animate={animate}>
      <View style={[styles.button, {backgroundColor, borderColor}]}>
        <Text style={[styles.buttonText, {color}]}>{label}</Text>
      </View>
    </MotiPressable>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
