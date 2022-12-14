import Link from 'next/link'
import { NextRouter, withRouter } from 'next/router'
import React from 'react'

import SimpleBlockContent from '@/components/SimpleBlockContent'
import { FooterProps } from '@/lib/types'
import { getPathFromSlug, slugParamToPath } from '@/lib/urls'

import ThemeSwitcher from './ThemeSwitch'

const Footer = ({ navItems, text, router }: FooterProps) => {
    return (
        <div className="bg-gray-200 py-12 dark:bg-gray-900">
            <div className="container">
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <div>
                        <nav className="font-sans">
                            <ul className="flex space-x-2 py-6">
                                {navItems &&
                                    navItems.map((item) => {
                                        const isActive =
                                            slugParamToPath(
                                                router.query.slug
                                            ) === item.slug.current
                                        return (
                                            <li
                                                key={item._id}
                                                className="px-2 py-1"
                                            >
                                                <Link
                                                    href={getPathFromSlug(
                                                        item.slug.current
                                                    )}
                                                    data-is-active={
                                                        isActive
                                                            ? 'true'
                                                            : 'false'
                                                    }
                                                    aria-current={isActive}
                                                    className={`border-b-2 border-gray-200 pb-2 hover:border-gray-100 hover:text-primary-500 dark:border-gray-900 dark:hover:border-gray-50 ${
                                                        isActive
                                                            ? 'border-gray-50 text-primary-500'
                                                            : null
                                                    }`}
                                                >
                                                    {item.title}
                                                </Link>
                                            </li>
                                        )
                                    })}
                            </ul>
                        </nav>
                    </div>
                    <ThemeSwitcher />
                </div>
                <div className="text-center text-xs">
                    <SimpleBlockContent blocks={text} />
                </div>
            </div>
        </div>
    )
}

export default withRouter(Footer)
