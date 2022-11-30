import Link from 'next/link';
import { NextRouter, withRouter } from 'next/router';
import React from 'react';

import styles from '@/components/Footer.module.css';
import SimpleBlockContent from '@/components/SimpleBlockContent';
import { getPathFromSlug, slugParamToPath } from '@/lib/urls';
import { FooterProps } from '@/lib/types';

const Footer = ({ navItems, text, router }: FooterProps) => {
  return (
    <div className={styles.root}>
      <nav>
        <ul className={styles.items}>
          {navItems &&
            navItems.map((item) => {
              const isActive =
                slugParamToPath(router.query.slug) === item.slug.current;
              return (
                <li key={item._id} className={styles.item}>
                  <Link href={getPathFromSlug(item.slug.current)}>
                    <a
                      data-is-active={isActive ? 'true' : 'false'}
                      aria-current={isActive}
                    >
                      {item.title}
                    </a>
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
      <div className={styles.text}>
        <SimpleBlockContent blocks={text} />
      </div>
    </div>
  );
};

export default withRouter(Footer);
