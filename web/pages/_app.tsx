import '@/styles/globals.css'

import { AppProps as NextAppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import React from 'react'

import SEO from '../next-seo.config'
// import { SiteConfig } from '../../studio/@types/schema';

const MyApp = ({ Component, pageProps }: NextAppProps) => {
    return (
        <>
            <DefaultSeo {...SEO} />
            <ThemeProvider attribute="class">
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

export default MyApp
