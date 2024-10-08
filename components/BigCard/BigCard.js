import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Dimensions, Image, Text, View} from 'react-native';
import styles from './style';

export default function BigCard({data}) {
  const height = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;
  const navigation = useNavigation();

  return (
    <View style={[styles.bigCardMainContainer, {width: width/1.1}]}>
      <View style={styles.chapterNameContainer}>
        <Text style={styles.chapterName}>Chapter {data.chapter}</Text>
      </View>
      <View style={styles.sectionNameContainer}>
        <Text style={styles.chapterTitle}>{data.chapter_title}</Text>
      </View>
      <View style={styles.sectionNameContainer}>
        <Text style={styles.sectionName}>Section {data.Section ? data.Section : '-'}</Text>
      </View>

      <View style={styles.sectionTitleContainer}>
        <Text style={styles.sectionTitle}>{data.section_title}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            navigation.navigate('section', {data: data});
          }}
          title="View More"
        />
      </View>
    </View>
  );
}
