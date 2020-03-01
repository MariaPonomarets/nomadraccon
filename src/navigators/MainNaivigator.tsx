import React, { ReactElement } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Auth from './AuthNavigator'
import Main from './TabsNavigator'
import AppRoutes from './app-routes'

const Stack = createStackNavigator()

export default () => {
  // const tokenData = useSelector((state: ReduxState) => getToken(state));
  const isLogged = false

  return (
    <Stack.Navigator headerMode="none">
      {isLogged ? (
        <Stack.Screen name={AppRoutes.HOME} component={Main} />
      ) : (
        <Stack.Screen name={AppRoutes.AUTH} component={Auth} />
      )}
    </Stack.Navigator>
  )
}
