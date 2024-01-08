import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Loader from '../../assets/Loader/Loader';
import {getApi} from '../../utils/baseApi/api';
import BigCard from '../BigCard/BigCard';
import Card from '../Card/Card';
import styles from './style';

export default function Home() {
  const [numsCols, setNumsCols] = useState(2);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const handleCardPress = (chapter_name, chapter_number) => {
    navigation.navigate('chapter', {
      chapter_name: chapter_name,
      chapter_number: chapter_number + 1,
    });
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
            style: 'cancel',
            onPress: () => {
              // BackHandler.exitApp()
              navigation.navigate('home');
            },
          },
        ]);
      });
  }, []);
  const [search, setSearch] = useState(null);
  const [searchApiData, setSearchApiData] = useState(null);
  const handleSearchChange = text => {
    setSearch(text);
  };
  const handleSearchApiCall = () => {
    if (search !== null) {
      getApi(`api/sectionTitle/${search}`)
        .then(res => {
          setSearchApiData(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    } else if (search === '') {
      setSearchApiData(null);
    }
  };
  const width = Dimensions.get('window').width;
  return (
    <SafeAreaView style={styles.homeMainContainer}>
      {loading ? (
        <Loader />
      ) : (
        <View style={styles.homeSubContainer}>
          {/* SearchBar  */}

          <View style={styles.searchBarContainer}>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={handleSearchChange}
              value={search}
              placeholder="Search a crime"
              onEndEditing={handleSearchApiCall}
            />

            <TouchableOpacity
              onPress={handleSearchApiCall}
              style={[styles.searchButtonContaier, {marginTop: 25}]}>
              <Image
                style={styles.searchIconContainer}
                source={require('../../assets/searchIcon.png')}
              />
            </TouchableOpacity>
          </View>

          {/* FlatList code  */}

          {searchApiData !== null ? (
            <ScrollView
              style={{
                width: width,
                alignSelf: 'center',
                marginLeft: width / 20,
              }}>
              {searchApiData?.map((item, index) => {
                return <BigCard data={item} key={index} />;
              })}
            </ScrollView>
          ) : (
            <FlatList
              data={apiData}
              renderItem={({item, index}) => {
                return (
                  <Card
                    handleCardPress={() => handleCardPress(item, index)}
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
          )}
        </View>
      )}
    </SafeAreaView>
  );
}
