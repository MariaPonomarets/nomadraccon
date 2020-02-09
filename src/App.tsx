import React from 'react'
import 'react-native-gesture-handler'
import { createAppContainer } from 'react-navigation'

import MainNavigator from './navigators/MainNaivigator'

const RoutedApp = createAppContainer(MainNavigator)

const App = () => {
  return <RoutedApp />
}

export default App
