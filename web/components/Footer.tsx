import Link from 'next/link';
import { NextRouter, withRouter } from 'next/router';
import React from 'react';

import SimpleBlockContent from '@/components/SimpleBlockContent';
import { getPathFromSlug, slugParamToPath } from '@/lib/urls';
import { FooterProps } from '@/lib/types';

const Footer = ({ navItems, text, router }: FooterProps) => {
  return (
    <div>
      <nav>
        <ul>
          {navItems &&
            navItems.map((item) => {
              const isActive =
                slugParamToPath(router.query.slug) === item.slug.current;
              return (
                <li key={item._id}>
                  <Link
                    href={getPathFromSlug(item.slug.current)}
                    data-is-active={isActive ? 'true' : 'false'}
                    aria-current={isActive}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
      <div>
        <SimpleBlockContent blocks={text} />
      </div>
    </div>
  );
};

export default withRouter(Footer);
