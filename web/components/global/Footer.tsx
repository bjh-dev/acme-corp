import Link from 'next/link'
import { NextRouter, withRouter } from 'next/router'
import React from 'react'

import SimpleBlockContent from '@/components/SimpleBlockContent'
import { FooterProps } from '@/lib/types'
import { getPathFromSlug, slugParamToPath } from '@/lib/urls'

import ThemeSwitcher from './ThemeSwitch'

const Footer = ({ navItems, text, router }: FooterProps) => {
    return (
        <div className="bg-zinc-200 py-12 dark:bg-zinc-900">
            <div className="container">
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <div>
                        <nav>
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
                                                    className={`border-b-2 border-zinc-200 pb-2 hover:border-zinc-100 hover:text-indigo-500 dark:border-zinc-900 dark:hover:border-zinc-50 ${
                                                        isActive
                                                            ? 'border-zinc-50 text-indigo-500'
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
