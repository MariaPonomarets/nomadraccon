import { ReactNode, RefObject } from 'react'
import { StyleProp, TextInput, ViewStyle } from 'react-native'

interface TextInputProps {
  value: string
  errorMessage?: string
  multiline?: boolean
  secureTextEntry?: boolean
  placeholder: string
  onChangeText?: (text: string) => void
  onFocus?: () => void
  onBlur?: () => void
}

export interface StylesProps {
  containerStyle: StyleProp<ViewStyle>
  inputStyle: StyleProp<ViewStyle>
  errorMessage: string
  theme?: any
}

export interface Props extends StylesProps {
  inputRef: RefObject<TextInput>
  inputProps: TextInputProps
  field?: string
  left?: ReactNode
  right?: ReactNode
}
