import React from 'react'
import { SafeAreaView, Text, StatusBar } from 'react-native'

const AppScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>AppScreen</Text>
      </SafeAreaView>
    </>
  )
}

export default AppScreen
