import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import GlobalStyle from 'global-styles';
import useFontLoad from 'hooks/use-font-load';
import NavBar from 'components/common/NavBar';
import Footer from 'components/common/Footer';
import MetaHead from 'components/common/MetaHead';
import theme from '../theme';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {

  const { fontLoaded } = useFontLoad(['Barlow Condensed', 'Staatliches'])

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <MetaHead title={pageProps.meta?.title} description={pageProps.meta?.description} link={pageProps.meta?.link} />
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
