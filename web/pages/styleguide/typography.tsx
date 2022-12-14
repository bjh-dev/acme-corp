import Layout from '@/components/global/Layout'
import Link from 'next/link'

const config = {
    _id: 'config',
    _rev: '1.00',
    _type: 'page',
    _createdAt: '2021-03-01T12:00:00.000Z',
    _updatedAt: '2021-03-01T12:00:00.000Z',
    title: 'Style Guide | Typography',
    mainNavigation: [
        {
            _createdAt: '2022-11-30T01:05:08Z',
            _id: '496d4810-824b-40d2-8c69-42202741ca6f',
            _rev: 'H01m4bdArhH8t9QrPSo4Io',
            _type: 'route',
            _updatedAt: '2022-11-30T01:05:08Z',
            includeInSitemap: true,
            page: {
                _ref: 'fa3f77d7-351b-443e-9aa7-7774cb82d7c5',
                _type: 'reference',
            },
            slug: {
                _type: 'slug',
                current: '/',
            },
            title: 'Home',
        },
        {
            _createdAt: '2022-11-30T01:07:26Z',
            _id: 'f3b97d56-f4d1-49f6-9c62-fce601005a49',
            _rev: 'H01m4bdArhH8t9QrPSoCbC',
            _type: 'route',
            _updatedAt: '2022-11-30T01:07:26Z',
            includeInSitemap: true,
            page: {
                _ref: '92add0fe-8456-43a0-a288-df81285dc61a',
                _type: 'reference',
            },
            slug: {
                _type: 'slug',
                current: 'about',
            },
            title: 'About',
        },
        {
            _createdAt: '2022-12-04T22:47:23Z',
            _id: '16b11a02-e87f-4748-86b4-7cabc41072b6',
            _rev: 'LUGXa2PYodGRB1Wz9r2nUa',
            _type: 'route',
            _updatedAt: '2022-12-05T23:13:00Z',
            includeInSitemap: true,
            page: {
                _ref: '421c0411-6dae-432f-9a58-d3a011860f62',
                _type: 'reference',
            },
            slug: {
                _type: 'slug',
                current: 'culture',
            },
            title: 'Culture',
        },
        {
            _createdAt: '2022-12-12T05:35:49Z',
            _id: '4e3bc5e5-40aa-4d6f-9992-b7872256c7a5',
            _rev: 'auNLWyJJmLj2IuZLbGq1Ql',
            _type: 'route',
            _updatedAt: '2022-12-12T05:36:16Z',
            includeInSitemap: true,
            page: {
                _ref: '103a6a9e-c68e-4398-838a-f2bfdae1b3b9',
                _type: 'reference',
            },
            slug: {
                _type: 'slug',
                current: 'courses',
            },
            title: 'Courses',
        },
    ],
    footerNavigation: [
        {
            _createdAt: '2022-11-30T01:05:08Z',
            _id: '496d4810-824b-40d2-8c69-42202741ca6f',
            _rev: 'H01m4bdArhH8t9QrPSo4Io',
            _type: 'route',
            _updatedAt: '2022-11-30T01:05:08Z',
            includeInSitemap: true,
            page: {
                _ref: 'fa3f77d7-351b-443e-9aa7-7774cb82d7c5',
                _type: 'reference',
            },
            slug: {
                _type: 'slug',
                current: '/',
            },
            title: 'Home',
        },
        {
            _createdAt: '2022-11-30T01:07:26Z',
            _id: 'f3b97d56-f4d1-49f6-9c62-fce601005a49',
            _rev: 'H01m4bdArhH8t9QrPSoCbC',
            _type: 'route',
            _updatedAt: '2022-11-30T01:07:26Z',
            includeInSitemap: true,
            page: {
                _ref: '92add0fe-8456-43a0-a288-df81285dc61a',
                _type: 'reference',
            },
            slug: {
                _type: 'slug',
                current: 'about',
            },
            title: 'About',
        },
        {
            _createdAt: '2022-12-04T22:47:23Z',
            _id: '16b11a02-e87f-4748-86b4-7cabc41072b6',
            _rev: 'LUGXa2PYodGRB1Wz9r2nUa',
            _type: 'route',
            _updatedAt: '2022-12-05T23:13:00Z',
            includeInSitemap: true,
            page: {
                _ref: '421c0411-6dae-432f-9a58-d3a011860f62',
                _type: 'reference',
            },
            slug: {
                _type: 'slug',
                current: 'culture',
            },
            title: 'Culture',
        },
    ],
    footerText: [
        {
            _key: '89de10c12fff',
            _type: 'block',
            children: [
                {
                    _key: '1d9c63cd81c50',
                    _type: 'span',
                    marks: [],
                    text: '© 2022 ACME Corp. All rights reserved.',
                },
            ],
            mark: [],
            style: 'normal',
        },
    ],
    logo: {
        asset: {
            extension: 'svg',
            url: 'https://cdn.sanity.io/images/l1m6fvcx/production/08b8dac952c4fbf519a4c8b842fee7a74ae8ab06-280x100.svg',
        },
    },
    url: '',
}

const Typography = () => {
    return (
        <Layout config={config}>
            <div className="bg-gray-300 py-4 font-sans">
                <div className="container">
                    <div className="flex">
                        <div className="mr-4">
                            <h3 className="font-bold">Styleguide:</h3>
                        </div>
                        <div>
                            <Link
                                className="py-4 px-6 hover:bg-primary hover:text-white"
                                href="/styleguide/colours"
                            >
                                Colours
                            </Link>
                        </div>
                        <div>
                            <Link
                                className="py-4 px-6 hover:bg-primary hover:text-white"
                                href="/styleguide/typography"
                            >
                                Typography
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden">
                <div className="bg-primary"></div>
                <div className="bg-lime-zest"></div>
                <div className="bg-brandy"></div>
                <div className="bg-mandy"></div>
                <div className="bg-plum"></div>
            </div>
            <div>
                <div className="border-b-8 bg-gray-200 py-12 text-gray-800">
                    <div className="container">
                        <h2 className="font-sans text-lg font-bold uppercase">
                            Styleguide
                        </h2>
                        <h1 className="pb-4 font-sans text-7xl font-light">
                            Typography
                        </h1>
                        <p className="text-lg">
                            This is an overview of the typography used in the
                            design system.
                        </p>
                    </div>
                </div>

                <div className="container py-12">
                    <div className="max-w-4xl">
                        <h3 className="mb-6 border-b pb-4 font-sans text-xl font-bold">
                            Introduction
                        </h3>
                        <p className="pb-4">
                            Typography selection is one of the most important
                            parts of an organisations brand identity. It applied
                            to almost every application of the brand. Setting
                            the right direction for typography applications is
                            fundamental to establishing a good brand.
                        </p>
                        <p className="pb-4">
                            We sought out font combinations that were flexible,
                            unique and identifiable. A flexible licence for use
                            across print and web was essential. The typeface
                            should be released under an Open Fonts license which
                            allows us to use the font without restriction in
                            print and online. Reliable webfont hosting was
                            considered important too.
                        </p>
                        <p className="pb-4">
                            To meet these criteria we limited our search to the
                            Google Fonts library.
                        </p>
                    </div>
                </div>

                <div className="container py-12">
                    <div className="max-w-xl">
                        <h3 className="mb-6 border-b pb-4 font-sans text-xl font-bold">
                            Headings
                        </h3>
                        <p className="pb-4">
                            The old posters and signs in the traditional
                            Montserrat neighbourhood of Buenos Aires inspired
                            Julieta Ulanovsky to design this typeface and rescue
                            the beauty of urban typography that emerged in the
                            first half of the twentieth century.
                        </p>
                        <p className="pb-4">
                            Montserrat is used in three weights; extra light,
                            regular and bold. Each weight has an italicised
                            version.
                        </p>
                        <p className="pb-4">
                            The font is available for download from{' '}
                            <a
                                href="https://fonts.google.com/specimen/Montserrat"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="text-primary underline hover:text-primary-700"
                            >
                                Google Fonts
                            </a>
                            .
                        </p>
                    </div>
                </div>

                <div className="container py-12">
                    <div className="max-w-xl">
                        <h3 className="mb-6 border-b pb-4 font-sans text-xl font-bold">
                            Body Copy
                        </h3>
                        <p className="pb-4">
                            Lora is a well-balanced contemporary serif with
                            roots in calligraphy. It is a text typeface with
                            moderate contrast well suited for body text.
                        </p>
                        <p className="pb-4">
                            Lora is used in two weights; regular and bold. Each
                            weight has an italicised version.
                        </p>
                        <p className="pb-4">
                            The font is available for download from{' '}
                            <a
                                href="https://fonts.google.com/specimen/Lora"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="text-primary underline hover:text-primary-700"
                            >
                                Google Fonts
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Typography
