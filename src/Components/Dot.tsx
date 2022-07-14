import React from 'react';
import {Dimensions} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';

interface DotProps {
  index: number;
  currentIndex: SharedValue<number>;
}

const {width} = Dimensions.get('window');

export const Dot = ({index, currentIndex}: DotProps): JSX.Element => {
  const opacity = useDerivedValue(() => {
    return currentIndex.value / width;
  }, [currentIndex]);

  const opacityStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        opacity.value,
        [index - 1, index, index + 1],
        [0.5, 1, 0.5],
        Extrapolate.CLAMP,
      ),
      transform: [
        {
          scale: interpolate(
            opacity.value,
            [index - 1, index, index + 1],
            [1, 1.25, 0.5],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        {
          backgroundColor: '#2CB9B0',
          width: 8,
          height: 8,
          borderRadius: 4,
          margin: 4,
        },
        opacityStyles,
      ]}
    />
  );
};

export default Dot;
