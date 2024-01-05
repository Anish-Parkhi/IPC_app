import LottieView from 'lottie-react-native';
import React from 'react';
import {Dimensions, View} from 'react-native';
import styles from './style';

export default function Loader() {
    const height = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;
  return (
    <View style={styles.loaderContainer}>
      <LottieView
        source={require('../loader.json')}
        autoPlay
        style={{height: height, width: width / 2}}
      />
    </View>
  );
}
