import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Card from '../Card/Card';
import styles from './style';

const Data = [
  {
    id: 1,
    chapter_number: '1',
    chapter_name: 'Introduction',
  },
  {
    id: 2,
    chapter_number: '2',
    chapter_name: 'General Explanations',
  },
  {
    id: 3,
    chapter_number: '3',
    chapter_name: 'Punishments',
  },
  {
    id: 4,
    chapter_number: '4',
    chapter_name: 'General Exceptions',
  },
  {
    id: 5,
    chapter_number: '5',
    chapter_name: 'Abetment',
  },
  {
    id: 6,
    chapter_number: '6',
    chapter_name: 'Offences Against the State',
  },
  {
    id: 7,
    chapter_number: '7',
    chapter_name: 'Offences Relating to the Army, Navy and Air Force',
  },
  {
    id: 8,
    chapter_number: '8',
    chapter_name: 'Offences Against the Public Tranquillity',
  },
];

export default function Home() {
  const [numsCols, setNumsCols] = useState(2);
  return (
    <SafeAreaView style={styles.homeMainContainer}>
      <View style={styles.homeSubContainer}>
        <FlatList
          data={Data}
          renderItem={({item}) => (
            <Card
              chapter_name={item.chapter_name}
              chapter_number={item.chapter_number}
            />
          )}
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
