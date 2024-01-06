import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {getApi} from '../../utils/baseApi/api.js';
import styles from './style.js';

export default function Section() {
  const route = useRoute();
  let {data} = route.params;
  const navigation = useNavigation();
  // console.log(data);
  const prevSection = data.Section - 1;
  const nextSection = data.Section + 1;

  const handlePreviousPress = () => {
    getApi(`api/sections/getByNumber/${prevSection}`)
      .then(response => {
        data = response.data;
        navigation.replace('section', {data: data})
      })
      .catch(error => {
        console.log(error);
      });
    // navigation.navigate('section', {data: prevData});
  };
  console.log(data)
  console.log('type of the data is', typeof(data));
  return (
    <View style={styles.sectionMainContainer}>
      <View style={styles.sectionNumberWrapper}>
        <Text style={styles.sectionNameContainer}>Section {data.Section}</Text>
      </View>
      <View style={styles.horizontalRuleContainer}></View>
      <View style={styles.sectionTitleWrapper}>
        <Text style={styles.sectionTitleContainer}>{data.section_title}</Text>
      </View>
      <Text style={styles.sectionDescriptionSubContainer}>
        Section Description
      </Text>
      <View style={styles.horizontalRuleContainerDesc}></View>
      <ScrollView style={styles.sectionDescriptionWrapper}>
        <Text style={styles.sectionDescriptionContainer}>
          {data.section_desc}
        </Text>
      </ScrollView>
      <View style={styles.buttonContainerMain}>
        <TouchableOpacity
          style={{
            width: 80,
            backgroundColor: '#0080ff',
            padding: 10,
            borderRadius: 5,
            marginRight: 10,
          }}
          onPress={handlePreviousPress}>
          <Text style={{color: 'white', textAlign: 'center'}}>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 80,
            backgroundColor: '#0080ff',
            padding: 10,
            borderRadius: 5,
            marginRight: 10,
          }}
          onPress={() => {
            // Handle Previous button press
          }}>
          <Text style={{color: 'white', textAlign: 'center'}}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
