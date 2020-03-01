import React from 'react'
import { SafeAreaView, Text, StatusBar, Button } from 'react-native'
import { useDispatch } from 'react-redux'
import { Input } from 'react-native-elements'

import { login } from '../../redux/reducers/authReducer'

const RegistrationScreen = () => {
  const dispatch = useDispatch()
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>RegistrationScreen</Text>
        <Input placeholder="BASIC INPUT" />
        <Button title="Home" onPress={() => dispatch(login(true))} />
      </SafeAreaView>
    </>
  )
}

export default RegistrationScreen
