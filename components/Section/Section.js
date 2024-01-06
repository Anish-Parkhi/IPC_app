import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Loader from '../../assets/Loader/Loader.js';
import {getApi} from '../../utils/baseApi/api.js';
import styles from './style.js';

export default function Section() {
  const route = useRoute();
  let {data} = route.params;
  const navigation = useNavigation();
  // console.log(data);
  const prevSection = data.Section - 1;
  const nextSection = data.Section + 1;
  const [loading, setLoading] = useState(false);

  const handlePreviousPress = () => {
    if (isNaN(prevSection)) {
      Alert.alert(
        'This section is continuation ',
        'Go back to previous screen ?',
        [
          {
            title: 'Go back',
            onPress: () => {
              navigation.goBack();
            },
          },
        ],
      );
    } else {
      setLoading(true);
      getApi(`api/sections/getByNumber/${prevSection}`)
        .then(response => {
          const prevInfoData = response.data[0];
          navigation.replace('section', {data: prevInfoData});
          setLoading(false);
        })
        .catch(error => {
          console.log(error);
          Alert.alert('Oops!, error fetching the data', [
            {
              text: 'Go to home',
              onPress: () => {
                navigation.navigate('home');
              },
            },
          ]);
        });
    }
  };
  console.log(isNaN(prevSection));

  const handleNextPress = () => {
    if (isNaN(nextSection)) {
      Alert.alert(
        'This section is continuation ',
        'Go back to previous screen ?',
        [
          {
            title: 'Go back',
            onPress: () => {
              navigation.goBack();
            },
          },
        ],
      );
    } else {
      setLoading(true);
      getApi(`api/sections/getByNumber/${nextSection}`)
        .then(res => {
          const nextData = res.data[0];
          navigation.replace('section', {data: nextData});
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
          Alert.alert('Oops!, error fetching the data', [
            {
              text: 'Go to home',
              onPress: () => {
                navigation.navigate('home');
              },
            },
          ]);
        });
    }
  };

  return (
    <View style={styles.sectionMainContainer}>
      {loading ? (
        <Loader />
      ) : (
        <ScrollView>
          <View style={styles.sectionNumberWrapper}>
            <Text style={styles.sectionNameContainer}>
              Section {data.Section}
            </Text>
          </View>
          <View style={styles.horizontalRuleContainer}></View>
          <View style={styles.sectionTitleWrapper}>
            <Text style={styles.sectionTitleContainer}>
              {data.section_title}
            </Text>
          </View>
          <Text style={styles.sectionDescriptionSubContainer}>
            Section Description
          </Text>
          <View style={styles.horizontalRuleContainerDesc}></View>
          <View style={{marginBottom: 10}}>
            <ScrollView style={styles.sectionDescriptionWrapper}>
              <Text style={styles.sectionDescriptionContainer}>
                {data.section_desc}
              </Text>
            </ScrollView>
          </View>
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
              <Text style={{color: 'white', textAlign: 'center'}}>
                Previous
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 80,
                backgroundColor: '#0080ff',
                padding: 10,
                borderRadius: 5,
                marginRight: 10,
              }}
              onPress={handleNextPress}>
              <Text style={{color: 'white', textAlign: 'center'}}>Next</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </View>
  );
}
