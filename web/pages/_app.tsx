import '@/styles/globals.css';
import '@/styles/shared.module.css';
import '@/styles/layout.css';
import '@/styles/custom-properties.css';

import { AppProps as NextAppProps } from 'next/app';
import React from 'react';
// import { SiteConfig } from '../../studio/@types/schema';

const MyApp = ({ Component, pageProps }: NextAppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
