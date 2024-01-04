import { View, Text } from 'react-native'
import React, { Children } from 'react'
import styles from './style'
import { useRoute } from '@react-navigation/native'

export default function Chapter() {
  const route = useRoute()
  const { chapter_number } = route.params
  console.log(chapter_number)
  return (
    <View>
      <Text>Chapter</Text>
    </View>
  )
}