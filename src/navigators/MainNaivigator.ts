import { createSwitchNavigator } from 'react-navigation'

import SplashScreen from '../screens/SplashScreen'
import AppStack from './AppStack'
import AuthStack from './AuthStack'

const MainNavigator = createSwitchNavigator(
  {
    Splash: { screen: SplashScreen },
    Auth: { screen: AuthStack },
    App: { screen: AppStack }
  },
  {
    initialRouteName: 'App'
  }
)

export default MainNavigator
