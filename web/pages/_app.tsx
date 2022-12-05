import '@/styles/globals.css'

import imageUrlBuilder from '@sanity/image-url'
import { AppProps as NextAppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import React from 'react'

import { client } from '@/lib/sanity'
// import { SiteConfig } from '../../studio/@types/schema';
const builder = imageUrlBuilder(client)

const MyApp = ({ Component, pageProps }: NextAppProps) => {
    console.log(pageProps)
    const openGraphImages = pageProps.accessibleImage?.asset
        ? [
              {
                  url: builder
                      .image(pageProps.accessibleImage.asset)
                      .width(800)
                      .height(600)
                      .url(),
                  width: 800,
                  height: 600,
                  alt: pageProps.accessibleImage.alt,
              },
              {
                  // Facebook recommended size
                  url: builder
                      .image(pageProps.accessibleImage.asset)
                      .width(1200)
                      .height(630)
                      .url(),
                  width: 1200,
                  height: 630,
                  alt: pageProps.accessibleImage.alt,
              },
              {
                  // Square 1:1
                  url: builder
                      .image(pageProps.accessibleImage.asset)
                      .width(600)
                      .height(600)
                      .url(),
                  width: 600,
                  height: 600,
                  alt: pageProps.accessibleImage.alt,
              },
          ]
        : [
              {
                  url: builder
                      .image(pageProps.config.seo.accessibleImage)
                      .width(800)
                      .height(600)
                      .url(),
                  width: 800,
                  height: 600,
                  alt: pageProps.config.seo.accessibleImage.alt,
              },
              {
                  // Facebook recommended size
                  url: builder
                      .image(pageProps.config.seo.accessibleImage)
                      .width(1200)
                      .height(630)
                      .url(),
                  width: 1200,
                  height: 630,
                  alt: pageProps.config.seo.accessibleImage.alt,
              },
              {
                  // Square 1:1
                  url: builder
                      .image(pageProps.config.seo.accessibleImage)
                      .width(600)
                      .height(600)
                      .url(),
                  width: 600,
                  height: 600,
                  alt: pageProps.config.seo.accessibleImage.alt,
              },
          ]
    // const openGraphImages = []
    return (
        <>
            <DefaultSeo
                title={
                    pageProps.descriptiveTitle ||
                    pageProps.title ||
                    pageProps.config.seo.title
                }
                description={
                    pageProps.description || pageProps.config.seo.description
                }
                canonical={
                    process.env.NODE_ENV === 'production'
                        ? pageProps.config.url
                        : 'http://localhost:3000/' + pageProps.slug
                }
                facebook={{
                    appId: pageProps.config.facebookId || '',
                }}
                openGraph={{
                    type: 'website',
                    locale: pageProps.config.lang,
                    url: `${
                        process.env.NODE_ENV === 'production'
                            ? pageProps.config.url
                            : 'http://localhost:3000'
                    }`,
                    siteName: `${pageProps.config.title}`,
                    images: openGraphImages,
                }}
                twitter={{
                    handle: pageProps.config.twitterHandle,
                    site: `${
                        process.env.NODE_ENV === 'production'
                            ? pageProps.config.url
                            : 'http://localhost:3000'
                    }`,
                    cardType: 'summary_large_image',
                }}
            />
            <ThemeProvider attribute="class">
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

export default MyApp
