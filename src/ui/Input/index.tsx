import React, { useContext } from 'react'
import { TextInput, View, Text } from 'react-native'

import { ThemeContext } from '../theme'

import createStyles from './styles'
import { Props } from './types'

export default function Input({
  inputRef,
  inputProps,
  inputStyle,
  containerStyle,
  errorMessage,
  left,
  right,
  field
}: Props) {
  const { theme } = useContext(ThemeContext)
  const styles = createStyles({
    theme,
    errorMessage,
    containerStyle,
    inputStyle
  })

  return (
    <View style={styles.container}>
      {field && (
        <Text style={styles.field} numberOfLines={1} ellipsizeMode="tail">
          {field}
        </Text>
      )}
      <View style={styles.inputContainer}>
        {left && <View style={styles.iconContainer}>{left}</View>}
        <TextInput
          ref={inputRef}
          style={styles.input}
          underlineColorAndroid="transparent"
          clearTextOnFocus={false}
          placeholderTextColor={theme?.colors.secondary_placeholder}
          selectionColor={theme?.colors.primary_color}
          {...inputProps}
        />
        <View style={styles.iconContainer}>{right}</View>
      </View>
      {errorMessage ? (
        <View style={styles.error}>
          <Text style={styles.errorText} numberOfLines={1} ellipsizeMode="tail">
            {errorMessage}
          </Text>
        </View>
      ) : null}
    </View>
  )
}

Input.defaultProps = {
  inputStyle: {},
  containerStyle: {},
  inputProps: {
    placeholder: 'Type here'
  }
}
