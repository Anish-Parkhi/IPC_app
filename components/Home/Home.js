import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {getApi} from '../../utils/baseApi/api';
import Card from '../Card/Card';
import styles from './style';

export default function Home() {
  const [numsCols, setNumsCols] = useState(2);
  const navigation = useNavigation();
  const handleCardPress = chapter_name => {
    navigation.navigate('chapter', {chapter_name: chapter_name});
  };
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    getApi('api/uniqueChapters')
      .then(response => {
        setApiData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <SafeAreaView style={styles.homeMainContainer}>
      <View style={styles.homeSubContainer}>
        <FlatList
          data={apiData}
          renderItem={({item, index}) => {  
            return(
              <Card
                handleCardPress={() => handleCardPress(item)}
                chapter_name={item}
                chapter_number={index+1}
              />
            )
          } }
          key={item => item.id}
          style={{width: '100%'}}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
          numColumns={numsCols}
          columnWrapperStyle={{justifyContent: 'space-around'}}
          ItemSeparatorComponent={() => <View style={{height: '100'}} />}
        />
      </View>
    </SafeAreaView>
  );
}
