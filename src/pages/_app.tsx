/* eslint-disable react/no-danger */
import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import GlobalStyle from 'global-styles';
import useFontLoad from 'hooks/use-font-load';
import NavBar from 'components/common/NavBar';
import Footer from 'components/common/Footer';
import MetaHead from 'components/common/MetaHead';
import Head from 'next/head';
import theme from '../theme';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {

  const { fontLoaded } = useFontLoad(['Barlow Condensed', 'Staatliches'])

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Head>
        <script
          dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PSKJ3PD');
          `
        }}
        />
      </Head>
      <MetaHead
        title={pageProps.meta?.title}
        description={pageProps.meta?.description}
        link={pageProps.meta?.link}
        previewImage={pageProps.meta?.previewImage}
      />
      <GlobalStyle />
      {
        fontLoaded && (
          <>
            <noscript>
              <iframe
                title="Google Tag Manager Body"
                src="https://www.googletagmanager.com/ns.html?id=GTM-PSKJ3PD"
                height="0"
                width="0"
                style={{
                  display: "none",
                  visibility:"hidden"
                }}
              />
            </noscript>
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
