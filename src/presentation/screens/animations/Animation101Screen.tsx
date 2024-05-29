import React, { useContext } from 'react';
import { Animated, Easing, Pressable, StyleSheet, Text } from 'react-native';
import { UseAnimation } from '../../hooks/UseAnimation';
import { colors as globalColor } from '../../../config/theme/theme';
import { CustomView } from '../../components/ui/CustomView';
import { ThemeContext } from '../../context/ThemeContext';

export const Animation101Screen = () => {
  const {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  } = UseAnimation();

  const { colors } = useContext(ThemeContext);

  return (
    <CustomView style={{ ...styles.container }}>
      <Animated.View
        style={[
          styles.purpleBox,
          {
            opacity: animatedOpacity,
            transform: [{ translateY: animatedTop }],
          },
        ]}
      />
      <Pressable
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({
            initialPosition: -100,
            easing: Easing.elastic(1),
            duration: 700,
          });
        }}
        style={{ marginTop: 10 }}>
        <Text style={{ color: colors.text }}>FadeIn</Text>
      </Pressable>
      <Pressable onPress={() => fadeOut({})} style={{ marginTop: 10 }}>
        <Text style={{ color: colors.text }}>FadeOut</Text>
      </Pressable>
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  purpleBox: {
    backgroundColor: globalColor.primary,
    width: 150,
    height: 150,
  },
});
