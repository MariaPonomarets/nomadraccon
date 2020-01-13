import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native'

import { Header, Colors } from 'react-native/Libraries/NewAppScreen'

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  }
})

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <Header />
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default App
