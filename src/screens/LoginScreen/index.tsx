import React, { useContext } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Input from '../../ui/Input'
import { ThemeContext } from '../../ui/theme'
import createStyles from './styles'
import useLogin from './useLogin'

const LoginScreen = () => {
  const navigation = useNavigation()
  const { theme, dimensions } = useContext(ThemeContext)
  const { email, password, togglePasswordVisibility } = useLogin()
  const styles = createStyles({ theme, dimensions })

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 20 }}>
        <View style={styles.header}>
          <Text style={styles.title}>Hello</Text>
          <Text style={styles.subtitle}>Hello</Text>
        </View>
        <Input
          {...email}
          right={
            <Icon size={20} color={theme?.colors.primary_color} name="user" />
          }
        />
        <Input
          {...password}
          right={
            <Icon
              size={20}
              color={theme?.colors.primary_color}
              name={password.inputProps.secureTextEntry ? 'eye' : 'eye-slash'}
              onPress={togglePasswordVisibility}
            />
          }
        />
      </View>
      <View />
      {/* <Button */}
      {/*  title="Register" */}
      {/*  onPress={() => navigation.navigate(AppRoutes.REGISTER)} */}
      {/* /> */}
    </SafeAreaView>
  )
}

export default LoginScreen
