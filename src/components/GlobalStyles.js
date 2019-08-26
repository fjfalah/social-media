import { createGlobalStyle } from 'styled-components'
import theme from '../constants/theme'

const GlobalStyles = createGlobalStyle`
  body {
    background: ${theme.color.white10};
    font-family: ${theme.font.rubik};
  }
`
export default GlobalStyles
