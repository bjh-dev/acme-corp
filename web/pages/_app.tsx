import '@/styles/globals.css'
import { Montserrat, Lora } from '@next/font/google'
import { AppProps as NextAppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import React from 'react'

import SEO from '../next-seo.config'

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
})
const lora = Montserrat({
    subsets: ['latin'],
    variable: '--font-lora',
})

const MyApp = ({ Component, pageProps }: NextAppProps) => {
    return (
        <>
            <DefaultSeo {...SEO} />
            <div className={`${montserrat.variable} ${lora.variable}`}>
                <ThemeProvider attribute="class">
                    <Component {...pageProps} />
                </ThemeProvider>
            </div>
        </>
    )
}

export default MyApp
