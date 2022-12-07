import { DefaultSeoProps } from 'next-seo'

const config: DefaultSeoProps = {
    titleTemplate: '%s | ACME Corp',
    openGraph: {
        type: 'website',
        locale: 'en_AU',
        siteName: 'ACME Corp',
    },
    twitter: {
        handle: '@acme-corp',
        site: 'ACME Corp',
        cardType: 'summary_large_image',
    },
    facebook: {
        appId: '',
    },
}

export default config
