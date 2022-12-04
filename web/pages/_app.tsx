import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';

import { AppProps as NextAppProps } from 'next/app';
import React from 'react';
// import { SiteConfig } from '../../studio/@types/schema';

const MyApp = ({ Component, pageProps }: NextAppProps) => {
  return (
    <>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
