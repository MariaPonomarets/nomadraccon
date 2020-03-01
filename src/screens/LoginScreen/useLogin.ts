import { useState, useRef, RefObject } from 'react'
import { TextInput } from 'react-native'

import AppRoutes from '../../navigators/app-routes'
import { emailValidation, passwordValidation } from '../../utils/validations'
import { Errors } from './types'

const useLogin = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errors, setErrors] = useState<Errors>({ email: '', password: '' })
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true)

  const passwordRef: RefObject<TextInput> = useRef(null)

  const auth = () => {
    console.log('auth')
  }

  const onEmailChange = (text: string) => {
    if (errors.email) {
      setErrors({ ...errors, email: '' })
    }
    setEmail(text)
  }

  const onEmailSubmitEditing = () => {
    if (emailValidation(email)) {
      if (errors.email) {
        setErrors({ ...errors, email: '' })
      }
    } else {
      setErrors({ ...errors, email: 'Email not valid' })
    }
    passwordRef.current?.focus()
  }

  const onPasswordChange = (text: string) => {
    if (errors.password) {
      setErrors({ ...errors, password: '' })
    }
    setPassword(text)
  }

  const onPasswordSubmitEditing = () => {
    if (passwordValidation(password)) {
      if (errors.email) {
        setErrors({ ...errors, password: '' })
      }
      auth()
    } else {
      setErrors({ ...errors, password: 'Password not valid' })
    }
  }

  const handleSetPasswordVisible = () => setSecureTextEntry(value => !value)

  return {
    submit: auth,
    togglePasswordVisibility: handleSetPasswordVisible,
    email: {
      inputProps: {
        value: email,
        placeholder: 'Email',
        onChangeText: onEmailChange,
        onSubmitEditing: onEmailSubmitEditing,
        onBlur: onEmailSubmitEditing,
        returnKeyType: 'next'
      },
      errorMessage: errors.email
    },
    password: {
      inputRef: passwordRef,
      inputProps: {
        value: password,
        placeholder: 'Password',
        onChangeText: onPasswordChange,
        onSubmitEditing: onPasswordSubmitEditing,
        onBlur: onPasswordSubmitEditing,
        secureTextEntry,
        returnKeyType: 'go'
      },
      errorMessage: errors.password
    }
  }
}

export default useLogin
