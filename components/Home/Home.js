import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  BackHandler,
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Loader from '../../assets/Loader/Loader';
import { getApi } from '../../utils/baseApi/api';
import Card from '../Card/Card';
import sectionData from './sectionData';
import styles from './style';

export default function Home() {
  const [numsCols, setNumsCols] = useState(2);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const handleCardPress = (chapter_name, chapter_number) => {
    const chapter_name_without_space = chapter_name.toLowerCase();
    navigation.navigate('chapter', {
      chapter_name: chapter_name_without_space,
      chapter_number: chapter_number,
    });
  };
  const [search, setSearch] = useState(null);
  const isFocused = useIsFocused();
  //error in the below line
  const [searchApiData, setSearchApiData] = useState(null);
  const handleSearchChange = text => {
    setSearch(text);
  };
  useEffect(() => {
    Alert.alert(
      'Note',
      'This app does not have listing of all the chapters and newly added sections',
    );
  }, []);


  useEffect(() => {
    const backAction = () => {
      if (isFocused) {
        Alert.alert('Exit App ?', '', [
          {
            text: 'No',
            onPress: () => null,
            style: 'cancel',
          },
          {
            text: 'Yes',
            onPress: () => BackHandler.exitApp(),
          },
        ]);
        return true;
      } else {
        return false;
      }
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [isFocused]);



  const handleSearchApiCall = () => {
    if (search !== null && search !== '') {
      setLoading(true);
      getApi(`api/sectionTitle/${search}`)
        .then(res => {
          setSearchApiData(res.data);
          setLoading(false);
          navigation.navigate('search', {
            data: res.data,
            search: search
          })
        })
        .catch(err => {
          console.log(err);
        });
        
    } else if (search === '' || search === null) {
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
          <View style={styles.logoContainer}>
            <Text style={styles.logoHeader}>IPC Insights</Text>
          </View>

          {/* SearchBar  */}

          <View style={styles.searchBarContainer}>
            <TextInput
              style={{
                fontSize: 15,
                color: 'black',
                textAlign: 'left',
                marginLeft: 10,
                
              }}
              placeholderTextColor='black'
              onChangeText={handleSearchChange}
              value={search}
              placeholder="Search a crime   eg. fraud"
              onEndEditing={handleSearchApiCall}
            />
            <TouchableOpacity style={styles.searchButtonContaier} onPress={handleSearchApiCall}
            >
                <Image
                  style={styles.searchIconContainer}
                  source={require('../../assets/searchIcon.png')}
                />
            </TouchableOpacity>
          </View>

          {/* FlatList code  */}

          <FlatList
              data={sectionData}
              renderItem={({item}) => {
                return (
                  <Card
                    handleCardPress={() =>
                      handleCardPress(item.section_name, item.Section)
                    }
                    chapter_name={item.section_name}
                    chapter_number={item.Section}
                  />
                );
              }}
              key={item => item.id}
              style={{width: '100%', marginBottom: 60}}
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                gap: 15,
                paddingBottom: 50
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
