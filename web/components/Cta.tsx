import Link from 'next/link'
import React from 'react'

import { CtaProps } from '@/lib/types'

const cta = ({ title, route, link }: CtaProps) => {
    if (route && route.slug && route.slug.current) {
        return (
            <Link
                href={{
                    pathname: '/LandingPage',
                    query: { slug: route.slug.current },
                }}
                as={`/${route.slug.current}`}
                className="rounded-sm bg-primary-600 px-4 py-3 font-sans font-bold uppercase text-gray-50 shadow-lg hover:bg-primary-500"
            >
                {title}
            </Link>
        )
    }

    if (link) {
        return <a href={link}>{title}</a>
    }

    return <a>{title}</a>
}

export default cta
