import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import React from 'react';

import { client } from '@/lib/sanity';
import { DocumentProps } from '@/lib/types';
import Favicon from '@/components/Favicon';

export default class MyDocument extends Document<DocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return client
      .fetch('*[_id == "global-config"] {lang}.lang[0]')
      .then((lang) => {
        return { ...initialProps, lang };
      });
  }

  render() {
    return (
      <Html lang={this.props.lang || 'en-AU'}>
        <Head>
          <meta charSet="utf-8" />
          <Favicon />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
