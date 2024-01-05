import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import styles from './style.js';

export default function Section() {
  const route = useRoute();
  const {data} = route.params;
  console.log(data);
  return (
    <View style={styles.sectionMainContainer}>
      <View style={styles.sectionNumberWrapper}>
        <Text style={styles.sectionNameContainer}>Section {data.Section}</Text>
      </View>
      <View style={styles.horizontalRuleContainer}></View>
      <View style={styles.sectionTitleWrapper}>
        <Text style={styles.sectionTitleContainer}>{data.section_title}</Text>
      </View>
      <View style={styles.sectionDescriptionWrapper}>
        <Text style={styles.sectionDescriptionContainer}>
          {data.section_desc}
        </Text>
      </View>
    </View>
  );
}
