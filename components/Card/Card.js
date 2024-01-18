import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import styles from './style';

export default function Card(props) {
  const chapter_name = props.chapter_name;
  const chapter_number = props.chapter_number;
  const handleCardPress = props.handleCardPress;
  const imageUrl =
    'https://ipcgov.s3.ap-south-1.amazonaws.com/national_emblum.png';
  return (
    <TouchableHighlight
      style={styles.touchableComponentContainer}
      underlayColor="rgba(0, 0, 0, 0.1)"
      onPress={() => {
        handleCardPress();
      }}>
      <View style={styles.cardMainContainer}>
        <View style={styles.cardChapterContainer}>
          <Text style={styles.chapterTitleText}>Chapter</Text>
          <Text style={styles.chapterNumberText}>{chapter_number}</Text>
        </View>
        
        <View style={styles.chapterNameContainer}>
          <Text
            numberOfLines={3}
            ellipsizeMode="tail"
            style={styles.chapterName}>
            {chapter_name}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}
