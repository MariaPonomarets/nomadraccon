import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ExpensesScreen from '../screens/ExpensesScreen'
import TravelsScreen from '../screens/TravelsScreen'
import AppRoutes from './app-routes'

const BottomTab = createBottomTabNavigator()

const TabsNavigator = (): React.ReactElement => (
  <BottomTab.Navigator>
    <BottomTab.Screen name={AppRoutes.EXPENSES} component={ExpensesScreen} />
    <BottomTab.Screen name={AppRoutes.TRAVELS} component={TravelsScreen} />
  </BottomTab.Navigator>
)

export default TabsNavigator
