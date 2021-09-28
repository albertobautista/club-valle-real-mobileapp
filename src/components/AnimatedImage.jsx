import React, { useState } from 'react';
import { ActivityIndicator, Animated, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const AnimatedImage = ({ uri, style = {} }) => {
  console.log('uriuriuri', uri);

  const { opacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
    console.log('FINISSSSS', isLoading);
    fadeIn();
  };

  const onError = (err) => {
    setIsLoading(false);
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
      }}
    >
      {isLoading && <ActivityIndicator style={{ position: 'absolute' }} color="grey" size={30} />}

      <Animated.Image
        source={{ uri }}
        onError={onError}
        onLoad={finishLoading}
        style={{
          ...style,
          opacity,
        }}
      />
    </View>
  );
};
