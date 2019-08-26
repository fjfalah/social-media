import { createGlobalStyle } from 'styled-components'
import theme from '../constants/theme'

const GlobalStyles = createGlobalStyle`
  body {
    background: ${theme.color.grey10};
  }
`
export default GlobalStyles
