import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    scrollbar-width: 0px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    html {
      font-size: calc(16px + 4 * (100vw - 320px) / 880px); 
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    html {
      font-size: 24px;
    }
  }
  body {
    margin: 0;
    font-family: ${({theme}) => theme.fonts.main};
    background-color: ${({theme}) => theme.colors.primaryWhite};
  }
`

export default GlobalStyle
