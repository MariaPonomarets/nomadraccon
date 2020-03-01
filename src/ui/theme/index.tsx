import React, { createContext, useState, ReactNode, useEffect } from 'react'
import { Dimensions } from 'react-native'
import { Theme, themeTypes, ThemeContextI } from './types'
import defaultTheme from './default'

export const ThemeContext = createContext<ThemeContextI>({})

const themes = {
  default: defaultTheme,
  primary: defaultTheme
}

interface Props {
  children: ReactNode
}

const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [dimensions, setDimensions] = useState({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  })

  useEffect(() => {
    function dimensionsChange({ window }) {
      setDimensions({
        width: window.width,
        height: window.height
      })
    }

    Dimensions.addEventListener('change', dimensionsChange)
    return () => {
      Dimensions.removeEventListener('change', dimensionsChange)
    }
  }, [])

  const handleSetTheme = (newTheme: themeTypes) =>
    setTheme(themes[newTheme] || defaultTheme)

  return (
    <ThemeContext.Provider value={{ theme, handleSetTheme, dimensions }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
