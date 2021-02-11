import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Staatliches';
    src:  url('/fonts/staatliches/staatliches-regular.woff2') format('woff2'),
          url('/fonts/staatliches/staatliches-regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: 'Barlow Condensed';
    src:  url('/fonts/barlow-condensed/barlow-condensed-regular.woff2') format('woff2'),
          url('/fonts/barlow-condensed/barlow-condensed-regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: 'Barlow Condensed';
    src:  url('/fonts/barlow-condensed/barlow-condensed-bold.woff2') format('woff2'),
          url('/fonts/barlow-condensed/barlow-condensed-bold.woff') format('woff');
    font-weight: 700;
    font-style: bold;
    font-display: block;
  }
  html {
    font-size: 16px;
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
    overflow-x: hidden;
  }
`

export default GlobalStyle
