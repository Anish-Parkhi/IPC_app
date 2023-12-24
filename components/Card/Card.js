import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './style';

export default function Card(props) {
  const chapter_name = props.chapter_name;
  const chapter_number = props.chapter_number;
  const imageUrl =
    'https://ipcgov.s3.ap-south-1.amazonaws.com/national_emblum.png';
  return (
    <View style={styles.cardMainContainer}>
      <View style={styles.cardChapterContainer}>
        <Text style={styles.chapterTitleText}>Chapter</Text>
        <Text style={styles.chapterNumberText}>{chapter_number}</Text>
      </View>
      <View style={styles.cardImageContainer}>
        <Image
          style={styles.cardImageMain}
          // source={{uri: imageUrl}}
          source={require('./national_emblum_round.png')}
          onError={e => console.log(e)}
        />
      </View>
      <View style={styles.chapterNameContainer}>
        <Text style={styles.chapterName}>{chapter_name}</Text>
      </View>
    </View>
  );
}
