import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import BigCard from '../BigCard/BigCard';
import styles from './styles';

export default function SearchResults() {
  const route = useRoute();
  const {data} = route.params;
  const {search} = route.params;
  const width = Dimensions.get('window').width;
  return (
    <ScrollView
      style={{
        width: width,
        alignSelf: 'center',
      }}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoHeader}>IPC Insights</Text>
      </View>
      {data[0] ? (
        <View style={{alignSelf: 'center'}}>
          <View>
            <Text
              style={{
                fontSize: 14,
                color: 'black',
                marginTop: 5,
                marginBottom: 5,
              }}>
              The search results for {search}:{' '}
            </Text>
          </View>
          {data?.map((item, index) => (
            <BigCard data={item} key={index} />
          ))}
        </View>
      ) : (
        <View>
          <Text
            style={{
              alignSelf: 'center',
              marginTop: 20,
              fontSize: 18,
              color: 'black',
            }}>
            No records found!{' '}
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              marginTop: 20,
              fontSize: 18,
              color: 'black',
            }}>
            Try changing the search query{' '}
          </Text>
        </View>
      )}
    </ScrollView>
  );
}
