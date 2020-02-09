import React from 'react'
import { SafeAreaView, Text, StatusBar } from 'react-native'

const SplashScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Splash screen</Text>
      </SafeAreaView>
    </>
  )
}

export default SplashScreen
