import { StyleSheet } from 'react-native'

import { StylesProps } from './types'

const createStyles = ({
  theme,
  errorMessage,
  inputStyle,
  containerStyle
}: StylesProps) => {
  return StyleSheet.create({
    container: {
      paddingVertical: 5,
      paddingBottom: 25,
      ...StyleSheet.flatten(containerStyle)
    },
    inputContainer: {
      borderColor: errorMessage ? theme?.colors.error : theme?.colors.secondary,
      borderWidth: 1,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: errorMessage
        ? theme?.colors.error_bg
        : theme?.colors.secondary_color,
      paddingHorizontal: 5,
      ...StyleSheet.flatten(inputStyle)
    },
    input: {
      flex: 1,
      height: 40,
      marginHorizontal: 5,
      color: theme?.colors.primary_color,
      fontSize: theme?.fontsSize.fontM
    },
    field: {
      marginBottom: 5,
      color: theme?.colors.secondary,
      fontWeight: 'bold'
    },
    iconContainer: {
      width: 25,
      alignItems: 'center',
      justifyContent: 'center'
    },
    error: {
      position: 'absolute',
      bottom: 5,
      left: 0,
      right: 0
    },
    errorText: {
      color: theme?.colors.error,
      fontSize: theme?.fontsSize.fontM
    }
  })
}

export default createStyles
