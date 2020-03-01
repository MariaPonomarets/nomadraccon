import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from '@react-navigation/native'

import { StatusBar } from 'react-native'
import MainNavigator from './navigators/MainNaivigator'
import ThemeContextProvider from './ui/theme'
import { persistor, store } from './redux/store'

const App = (): ReactElement => (
  <>
    <StatusBar barStyle="light-content" />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeContextProvider>
          <NavigationContainer>
            <MainNavigator />
          </NavigationContainer>
        </ThemeContextProvider>
      </PersistGate>
    </Provider>
  </>
)

export default App
