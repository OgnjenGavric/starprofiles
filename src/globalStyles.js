import { createGlobalStyle } from 'styled-components'
import { fonts, colors } from './components/utils/_var'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.$colorBg};
    color: #fff;
    font-family: ${fonts.$latoFont};
  }
`

export default GlobalStyle
