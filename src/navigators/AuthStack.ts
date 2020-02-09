import { createStackNavigator } from 'react-navigation-stack'

import LoginScreen from '../screens/LoginScreen'
import RegistrationScreen from '../screens/RegistrationScreen'

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegistrationScreen
})

export default AuthStack
