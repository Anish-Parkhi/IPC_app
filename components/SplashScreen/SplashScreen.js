import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef} from 'react';
import {Animated, Image, View} from 'react-native';
import logo from './IPC_logo.png';

export default function SplashScreen() {
  const translateY = useRef(new Animated.Value(100)).current;
  const navigation = useNavigation();
  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      navigation.navigate('home');
    }, 1000);
  }, [translateY]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View style={{transform: [{translateY}]}}>
        <Image source={logo} />
      </Animated.View>
    </View>
  );
}
