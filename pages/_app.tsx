import React, { useEffect } from 'react';

import '../styles/globals.css'
import '../styles/index.css'

import { Container, ThemeProvider } from '@material-ui/core';
import NavBar from '../components/nav_bar/NavBar';

import Home from './index';

import theme from '../styles/theme'



import { AppProps } from 'next/dist/next-server/lib/router/router';

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <Home {...pageProps} />
      </div >
    </ThemeProvider >
  );
}

export default MyApp
