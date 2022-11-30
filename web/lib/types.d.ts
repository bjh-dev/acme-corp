export interface DocumentProps {
  lang?: string;
}

export interface LandingPageProps {
  title?: string;
  description: string;
  slug: string;
  disallowRobots: boolean;
  openGraphImage: any;
  content?: any[];
  config: ConfigProps;
}

export interface FooterNavigationProps {
  _id: string;
  title: string;
  page: object;
  slug: {
    current: string;
  };
}

export interface ConfigProps {
  _id: string;
  _rev: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
  mainNavigation: {
    _id: string;
    _rev: string;
    _type: string;
    title: string;
    slug: {
      current: string;
    };
  }[];
  footerNavigation: FooterNavigationProps[];
  footerText: {
    _key: string;
    _type: string;
    title: string;
    slug: string;
    children: any[];
    markDefs: any[];
    style: string;
  }[];
  logo: {
    logo: string;
    title: string;
    asset: {
      url: string;
      extension?: string;
    };
  };
  url: string;
}

export interface ServerProps extends GetServerSideProps {
  params: {
    slug: string;
  };
}

export interface SimpleBlockContentProps {
  blocks: any[];
}

export type SectionProps = {
  _type: string;
  _key: string;
  _id: string;
  section: ReactElement;
};

export interface RenderSectionsProps {
  sections: SectionProps[];
}

export interface LayoutProps {
  children: React.ReactNode;
  config: ConfigProps;
}

export type LogoProps = {
  logo: string;
  title: string;
  asset: {
    url: string;
    extension?: string;
  };
};

export interface WithRouterProps {
  router: NextRouter;
}

export interface HeaderProps extends WithRouterProps {
  title?: string;
  navItems: {
    _id: string;
    title: string;
    slug: {
      current: string;
    };
  }[];
  logo: LogoProps;
}

export interface WithRouterProps {
  router: NextRouter;
}

export interface FooterProps extends WithRouterProps {
  text: any;
  navItems: {
    _id: string;
    title: string;
    slug: {
      current: string;
    };
  }[];
}
export interface FigureProps {
  node: {
    alt: string;
    caption: string;
    asset: {
      _ref: string;
    };
  };
}

export interface EmbedHTMLProps {
  node: {
    html: string;
  };
}

export interface CtaProps {
  title: string;
  link: string;
  route: {
    slug: {
      current: string;
    };
  };
}

export interface TextSectionProps {
  heading: string;
  label: string;
  text: any[];
}

export interface MailChimpProps {
  heading: string;
  subtitle: string;
  actionUrl: string;
}

export interface ImageSectionProps {
  heading: string;
  label: string;
  text: any[];
  image: SanityImageSource;
  cta: any;
}

export interface HeroProps {
  heading: string;
  backgroundImage: SanityImageSource;
  tagline: any[];
  ctas: any[];
}

export interface IconProps extends SVGAttributes<SVGElement> {
  className?: string;
}
