import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

export default function Card(props) {
  const chapter_name = props.chapter_name;
  const chapter_number = props.chapter_number;
  return (
    <View style={styles.cardMainContainer}>
      <View style={styles.cardChapterContainer}>
        <Text style={styles.chapterTitleText}>Chapter</Text>
        <Text>{chapter_number}</Text>
      </View>
      <View style={styles.cardImageContainer}>
        <Text>Image</Text>
      </View>
      <View style={styles.chapterNameContainer}>
        <Text>{chapter_name}</Text>
      </View>
    </View>
  );
}
