import Link from 'next/link';
import React from 'react';

import { CtaProps } from '@/lib/types';

const cta = ({ title, route, link }: CtaProps) => {
  if (route && route.slug && route.slug.current) {
    return (
      <Link
        href={{
          pathname: '/LandingPage',
          query: { slug: route.slug.current },
        }}
        as={`/${route.slug.current}`}
      >
        {title}
      </Link>
    );
  }

  if (link) {
    return <a href={link}>{title}</a>;
  }

  return <a>{title}</a>;
};

export default cta;
