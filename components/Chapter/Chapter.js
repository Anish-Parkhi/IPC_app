import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, Dimensions, Text, TouchableHighlight, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Loader from '../../assets/Loader/Loader';
import {getApi} from '../../utils/baseApi/api';
import styles from './style';

export default function Chapter() {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const {width, height} = Dimensions.get('window');
  const route = useRoute();
  const {chapter_name} = route.params;
  const {chapter_number} = route.params;
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    getApi(`api/sections/${chapter_name}`)
      .then(response => {
        setApiData(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        console.log('oops! error loading the data');
        Alert.alert('Error Loading the data !', 'Please try again later', [
          {
            text: 'Go to Home',
            style: 'cancel',
            onPress: () => {
              navigation.navigate('home');
            },
          },
        ]);
      });
  }, []);
  const handleCardPress = data => {
    navigation.navigate('section', {data: data});
  };

  return (
    <View style={styles.chapterMainContainer}>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <View style={styles.chapterNameContainer}>
            <Text>Chapter {chapter_number}</Text>
          </View>

          <View style={styles.chapterNameContainer}>
            <Text
              style={{
                fontSize: width / 15,
                color: 'black',
                fontWeight: '600',
                textAlign: 'center',
              }}>
              {chapter_name}
            </Text>
          </View>
          <View style={styles.horizontalRuleContainer}></View>
          <FlatList
            contentContainerStyle={{gap: 14}}
            data={apiData}
            style={{marginBottom: 30}}
            renderItem={({item}) => {
              return (
                <TouchableHighlight
                  underlayColor="rgba(0, 0, 0, 0.1)"
                  onPress={() => {
                    handleCardPress(item);
                  }}>
                  <View style={styles.sectionNameContainer}>
                    <Text style={{color: 'black', fontSize: width / 22}}>
                      Section {item.Section}:
                    </Text>
                    <Text
                      width="75%"
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={{color: 'black', fontSize: width / 22}}>
                      {item.section_title}
                    </Text>
                  </View>
                </TouchableHighlight>
              );
            }}
            keyExtractor={item => item._id}
          />
        </View>
      )}
    </View>
  );
}
