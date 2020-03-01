import { StyleSheet } from 'react-native'

const createStyles = ({ theme, dimensions }) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme?.colors.secondary,
      flex: 1
    },
    title: {
      color: theme?.colors.primary_color,
      fontSize: theme?.fontsSize.fontXXL
    },
    subtitle: {
      color: theme?.colors.primary_color,
      fontSize: theme?.fontsSize.fontL,
      marginTop: 20
    },
    header: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: dimensions.height / 18
    }
  })

export default createStyles
