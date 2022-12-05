import Head from 'next/head';
import { LogoJsonLd } from 'next-seo';
import React from 'react';

import Footer from '@/components/global/Footer';
import Header from '@/components/global/Header';
import { LayoutProps } from '@/lib/types';

const Layout = (props: LayoutProps) => {
  const { config, children } = props;

  if (!config) {
    console.error('Missing config');
    return <div>Missing config</div>;
  }

  const { title, mainNavigation, footerNavigation, footerText, logo, url } =
    config;
  const logoUrl = logo && logo.asset && logo.asset.url;
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, viewport-fit=cover"
        />
      </Head>
      <div className="flex flex-col h-screen justify-between dark:bg-zinc-800 text-zinc-800 dark:text-zinc-50">
        <div>
          <Header title={title} navItems={mainNavigation} logo={logo} />
        </div>
        <div className="content mb-auto">{children}</div>
        <div>
          <Footer navItems={footerNavigation} text={footerText} />
        </div>
        {logoUrl && url && <LogoJsonLd url={url} logo={logoUrl} />}
      </div>
    </>
  );
};

export default Layout;
