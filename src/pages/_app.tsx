import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import GlobalStyle from 'global-styles';
import useFontLoad from 'hooks/use-font-load';
import NavBar from 'components/common/NavBar';
import Footer from 'components/common/Footer';
import theme from '../theme';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {

  const { fontLoaded } = useFontLoad(['Barlow Condensed', 'Staatliches'])

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      {
        fontLoaded && (
          <>
            <NavBar />
            <Component {...pageProps} />
            <Footer />
          </>
        )
      }
    </ThemeProvider>
  );
}

export default MyApp;
