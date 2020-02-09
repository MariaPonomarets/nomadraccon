import { createBottomTabNavigator } from 'react-navigation-tabs'

import ExpensesScreen from '../screens/ExpensesScreen'
import TravelsScreen from '../screens/TravelsScreen'

const TabStack = createBottomTabNavigator({
  Travels: TravelsScreen,
  Expanses: ExpensesScreen
})

export default TabStack
