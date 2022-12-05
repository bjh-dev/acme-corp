import type {
  SanityAsset,
  SanityBlock,
  SanityDocument,
  SanityFile,
  SanityGeoPoint,
  SanityImage,
  SanityImageAsset,
  SanityImageCrop,
  SanityImageDimensions,
  SanityImageHotspot,
  SanityImageMetadata,
  SanityImagePalette,
  SanityImagePaletteSwatch,
  SanityKeyed,
  SanityKeyedReference,
  SanityReference,
} from 'sanity-codegen';

export type {
  SanityAsset,
  SanityBlock,
  SanityDocument,
  SanityFile,
  SanityGeoPoint,
  SanityImage,
  SanityImageAsset,
  SanityImageCrop,
  SanityImageDimensions,
  SanityImageHotspot,
  SanityImageMetadata,
  SanityImagePalette,
  SanityImagePaletteSwatch,
  SanityKeyed,
  SanityKeyedReference,
  SanityReference,
};
export interface Page extends SanityDocument {
  _type: 'page';
  title?: string;
  content?: Array<SanityKeyed<Hero> | SanityKeyed<ImageSection> | SanityKeyed<Mailchimp> | SanityKeyed<TextSection>>;
  description?: string;
  openGraphImage?: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}
export interface Route extends SanityDocument {
  _type: 'route';
  slug?: { _type: 'slug'; current: string };
  page?: SanityReference<Page>;
  includeInSitemap?: boolean;
  disallowRobots?: boolean;
}
export interface SiteConfig extends SanityDocument {
  _type: 'site-config';
  title?: string;
  url?: string;
  frontpage?: SanityReference<Page>;
  lang?: string;
  logo?: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
    alt?: string;
  };
  mainNavigation?: Array<SanityKeyedReference<Route>>;
  footerNavigation?: Array<SanityKeyedReference<Route>>;
  footerText?: SimplePortableText;
}

export type Cta = {
  _type: 'cta';
  title?: string;
  route?: SanityReference<Route>;
  link?: string;
};

export type EmbedHTML = {
  _type: 'embedHTML';
  html?: string;
};

export type Figure = {
  _type: 'figure';
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;
  caption?: string;
  alt?: string;
};

export type Hero = {
  _type: 'hero';
  heading?: string;
  tagline?: SimplePortableText;
  backgroundImage?: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  ctas?: Array<SanityKeyed<Cta>>;
};

export type ImageSection = {
  _type: 'imageSection';
  heading?: string;
  label?: string;
  text?: SimplePortableText;
  image?: Figure;
  cta?: Cta;
};

export type InternalLink = SanityReference<Page | Route>;

export type Link = {
  _type: 'link';
  href?: string;
};

export type Mailchimp = {
  _type: 'mailchimp';
  heading?: string;
  subtitle?: string;
  actionUrl?: string;
};

export type PortableText = Array<SanityKeyed<SanityBlock> | SanityKeyed<Figure> | SanityKeyed<EmbedHTML>>;

export type SimplePortableText = Array<SanityKeyed<SanityBlock> | SanityKeyed<EmbedHTML>>;

export type TextSection = {
  _type: 'textSection';
  label?: string;
  heading?: string;
  text?: PortableText;
};

export type Documents = Page | Route | SiteConfig;
