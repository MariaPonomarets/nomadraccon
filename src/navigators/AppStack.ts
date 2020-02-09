import { createStackNavigator } from 'react-navigation-stack'

import TabsNavigator from './TabsNavigator'
import AuthStack from './AuthStack'

const AppStack = createStackNavigator({
  Auth: AuthStack,
  Main: TabsNavigator
})

export default AppStack
