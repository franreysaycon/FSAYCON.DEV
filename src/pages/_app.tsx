import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { Reset } from 'styled-reset';
import GlobalStyle from 'global-styles';
import useFontLoad from 'hooks/use-font-load';
import theme from '../theme';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {

  const { fontLoaded } = useFontLoad(['Barlow Condensed', 'Staatliches'])

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Head>
        <title>FSAYCON.DEV - Personal Website of Franrey Saycon</title>
        <meta
          name="description"
          content="Hi there, I'm Franrey Saycon. I'm a software engineer specializing in architecting solutions
        and building website/mobile apps."
          key="description"
        />
        <link rel="canonical" href="https://fsaycon.dev/" />
        <meta name="robots" content="index, follow" key="robots" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:title" content="FSAYCON.DEV - Personal Website of Franrey Saycon" key="og:title" />
        <meta property="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Hi there, I'm Franrey Saycon. I'm a software engineer specializing in architecting solutions
        and building website/mobile apps."
          key="og:description"
        />
        <meta property="og:image" content="/preview-image.png" key="og:image" />
        <meta
          property="og:image:alt"
          content="Fantasy drawing of Franrey Saycon in a sci-fi mechanic suit solving a cosmic rubix cube."
          key="og:image:alt" 
        />
        <meta property="og:url" content="https://fsaycon.dev/" key="og:url" />
        <meta property="og:site_name" content="FSAYCON.DEV - Personal Website of Franrey Saycon" key="og:site_name" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <GlobalStyle />
      {
        fontLoaded && <Component {...pageProps} />
      }
    </ThemeProvider>
  );
}



export default MyApp;
