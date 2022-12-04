import Head from 'next/head';
import { LogoJsonLd } from 'next-seo';
import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { LayoutProps } from '@/lib/types';
import ThemeSwitcher from './UI/ThemeSwitcher';
import Logo from '@/components/UI/Logo';

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
      <div className="dark:bg-zinc-800 text-zinc-800 dark:text-zinc-50">
        <div className="container">
          <div className="relative w-20 h-auto object-cover">
            <Logo layout="vertical" />
          </div>
          <ThemeSwitcher />
          <Header title={title} navItems={mainNavigation} logo={logo} />
          <div className="content">{children}</div>
          <Footer navItems={footerNavigation} text={footerText} />
          {logoUrl && url && <LogoJsonLd url={url} logo={logoUrl} />}
        </div>
      </div>
    </>
  );
};

export default Layout;
