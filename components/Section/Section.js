import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import { useRoute } from '@react-navigation/native'

export default function Section() {
  const route = useRoute()
  const { chapter_number } = route.params;
  console.log('chapter_number',chapter_number)
  return (
    <View>
      <Text>Section</Text>
      <Text>{chapter_number}</Text>
    </View>
  )
}