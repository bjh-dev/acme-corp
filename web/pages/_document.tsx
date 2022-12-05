import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document'
import React from 'react'

import Favicon from '@/components/Favicon'
import { client } from '@/lib/sanity'
import { DocumentProps } from '@/lib/types'

export default class MyDocument extends Document<DocumentProps> {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return client
            .fetch('*[_id == "global-config"] {lang}.lang[0]')
            .then((lang) => {
                return { ...initialProps, lang }
            })
    }

    render() {
        return (
            <Html lang={this.props.lang || 'en-AU'}>
                <Head>
                    <meta charSet="utf-8" />
                    <Favicon />
                </Head>
                <body className="text-zinc-800 dark:bg-zinc-800 dark:text-zinc-50">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
