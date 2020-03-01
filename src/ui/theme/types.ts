export interface Colors {
  primary: string
  primary_bg: string
  primary_color: string
  secondary: string
  primary_placeholder: string
  secondary_bg: string
  secondary_color: string
  secondary_placeholder: string
  error: string
  error_bg: string
}

export interface FontsSize {
  fontS: number
  fontM: number
  fontL: number
  fontXXL: number
}

export type themeTypes = 'default' | 'primary'

export interface Dimensions {
  width: number
  height: number
}

export interface ThemeContextI {
  theme?: Theme
  handleSetTheme?: (theme: themeTypes) => void
  dimensions?: Dimensions
}

export interface Theme {
  colors: Colors
  fontsSize: FontsSize
}
