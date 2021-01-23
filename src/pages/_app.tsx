import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { Reset } from 'styled-reset';
import GlobalStyle from 'global-styles';
import theme from '../theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Reset />
    <Head>
      <title>FSAYCON.DEV - Personal Website of Franrey Saycon</title>
      <meta
        name="description"
        content="Hi there, I'm Franrey Saycon. I'm a software engineer specializing in architecting solutions
      and building website/mobile apps."
      />
      <link rel="canonical" href="https://fsaycon.dev/" />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="FSAYCON.DEV - Personal Website of Franrey Saycon" />
      <meta property="twitter:card" content="summary" />
      <meta
        property="og:description"
        content="Hi there, I'm Franrey Saycon. I'm a software engineer specializing in architecting solutions
      and building website/mobile apps."
      />
      <meta property="og:image" content="https://i.ibb.co/Y7bYd27/preview-image.png" />
      <meta property="og:image:alt" content="Fantasy drawing of Franrey Saycon in a sci-fi mechanic suit solving a cosmic rubix cube." />
      <meta property="og:url" content="https://fsaycon.dev/" />
      <meta property="og:site_name" content="FSAYCON.DEV - Personal Website of Franrey Saycon" />
      {/* <link rel="shortcut icon" href={Favicon} type="image/x-icon" />
      <link rel="icon" href={Favicon} type="image/x-icon" /> */}
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
