import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AppRoutes from './app-routes'
import Login from '../screens/LoginScreen'
import Registration from '../screens/RegistrationScreen'

const Stack = createStackNavigator()

export default (): React.ReactElement => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={AppRoutes.LOGIN} component={Login} />
    <Stack.Screen name={AppRoutes.REGISTER} component={Registration} />
  </Stack.Navigator>
)
