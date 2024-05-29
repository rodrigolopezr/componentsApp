import React, { useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View,
} from 'react-native';
import { UseAnimation } from '../../hooks/UseAnimation';

interface Props {
  url: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ url, style }: Props) => {
  const { animatedOpacity, fadeIn } = UseAnimation();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      {isLoading && (
        <ActivityIndicator
          style={{ position: 'absolute' }}
          color="red"
          size={30}
        />
      )}
      <Animated.Image
        source={{ uri: url }}
        onLoadEnd={() => {
          fadeIn({});
          setIsLoading(false);
        }}
        style={[style, { opacity: animatedOpacity }]}
      />
    </View>
  );
};
