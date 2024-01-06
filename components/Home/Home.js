import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, SafeAreaView, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Loader from '../../assets/Loader/Loader';
import {getApi} from '../../utils/baseApi/api';
import Card from '../Card/Card';
import styles from './style';

export default function Home() {
  const [numsCols, setNumsCols] = useState(2);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const handleCardPress = chapter_name => {
    navigation.navigate('chapter', {chapter_name: chapter_name});
  };
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    getApi('api/uniqueChapters')
      .then(response => {
        setApiData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        Alert.alert('Error Loading the data !', 'Please try again later', [
          {
            text: 'Go to Home',
            style:'cancel',
            onPress: () => {
              // BackHandler.exitApp()
              navigation.navigate('home')
            }
          }
        ])
      });
  }, []);
  return (
    <SafeAreaView style={styles.homeMainContainer}>
      {loading ? (
        <Loader />
      ) : (
        <View style={styles.homeSubContainer}>
          <FlatList
            data={apiData}
            renderItem={({item, index}) => {
              return (
                <Card
                  handleCardPress={() => handleCardPress(item)}
                  chapter_name={item}
                  chapter_number={index + 1}
                />
              );
            }}
            key={item => item.id}
            style={{width: '100%'}}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              gap: 15,
            }}
            numColumns={numsCols}
            columnWrapperStyle={{justifyContent: 'space-around', gap: 4}}
            ItemSeparatorComponent={() => <View style={{height: '100'}} />}
          />
        </View>
      )}
    </SafeAreaView>
  );
}
