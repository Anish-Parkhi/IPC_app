import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

export default function SplashScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('home');
    }, 1000);
  }, []);
  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  );
}
