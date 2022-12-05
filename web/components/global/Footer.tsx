import Link from 'next/link';
import { NextRouter, withRouter } from 'next/router';
import React from 'react';

import SimpleBlockContent from '@/components/SimpleBlockContent';
import { FooterProps } from '@/lib/types';
import { getPathFromSlug, slugParamToPath } from '@/lib/urls';

import ThemeSwitcher from '../ui/ThemeSwitch';
import ThemeSwitch from '../ui/ThemeSwitch';

const Footer = ({ navItems, text, router }: FooterProps) => {
  return (
    <div className="dark:bg-zinc-700 bg-zinc-200 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <nav>
              <ul className="flex space-x-2 py-6">
                {navItems &&
                  navItems.map((item) => {
                    const isActive =
                      slugParamToPath(router.query.slug) === item.slug.current;
                    return (
                      <li key={item._id} className="px-2 py-1">
                        <Link
                          href={getPathFromSlug(item.slug.current)}
                          data-is-active={isActive ? 'true' : 'false'}
                          aria-current={isActive}
                          className={`hover:text-indigo-500 border-b-2 border-zinc-200 dark:border-zinc-700 hover:border-zinc-800 dark:hover:border-zinc-50 pb-2 ${
                            isActive ? 'text-indigo-500 border-zinc-50' : null
                          }`}
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </nav>
          </div>
          <ThemeSwitch />
        </div>
        <div className="text-xs text-center">
          <SimpleBlockContent blocks={text} />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Footer);
