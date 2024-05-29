import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

interface Props {
  duration?: number;
  toValue?: number;
  callBack?: () => void;
}

export const UseAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  const fadeIn = ({ duration, toValue = 1, callBack }: Props) => {
    // Animated.timing(animatedTop, {
    //   toValue: 0,
    //   duration: 700,
    //   useNativeDriver: true,
    //   easing: Easing.bounce,
    // }).start(() => console.log('ended'));

    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callBack);
  };

  const fadeOut = ({ duration = 300, toValue = 0, callBack }: Props) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callBack);
  };

  const startMovingTopPosition = ({
    initialPosition = 0,
    toValue = 0,
    duration = 300,
    easing = Easing.linear,
    callBack = () => {},
  }) => {
    animatedTop.setValue(initialPosition);
    Animated.timing(animatedTop, {
      toValue: toValue,
      useNativeDriver: true,
      duration: duration,
      easing: easing,
    }).start(callBack);
  };

  return {
    //Properties
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  };
};
