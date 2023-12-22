import React from 'react';
import {SafeAreaView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Card from '../Card/Card';
import styles from './style';
import { useState } from 'react';

const Data = [
  {
    id: 1,
    name: 'Jai Babaji',
  },
  {
    id: 2,
    name: 'Gurudev Datta',
  },
  {
    id: 3,
    name: 'Namah Shivay',
  },
  {
    id: 4,
    name: 'Jai Hanuman',
  },
];

export default function Home() {
  const [numsCols, setNumsCols] = useState(2)
  return (
    <SafeAreaView style={styles.homeMainContainer}>
      <FlatList
        data={Data}
        renderItem={({item}) => <Card name={item.name} />}
        key={item => item.id}
        style={{width: '100%', display: 'flex'}}
        contentContainerStyle={{justifyContent: 'center'}}
        numColumns={numsCols}
      />
    </SafeAreaView>
  );
}
