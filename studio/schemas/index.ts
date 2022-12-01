// Document types
import page from './documents/page';
import route from './documents/route';
import siteConfig from './documents/siteConfig';

// Object types
import cta from './objects/cta';
import embedHTML from './objects/embedHTML';
import figure from './objects/figure';
import internalLink from './objects/internalLink';
import link from './objects/link';
import portableText from './objects/portableText';
import simplePortableText from './objects/simplePortableText';

// Landing page sections
import hero from './objects/hero';
import imageSection from './objects/imageSection';
import mailchimp from './objects/mailchimp';
import textSection from './objects/textSection';
import seo from './objects/seo';
import address from './objects/address';
import person from './documents/person';

// Then we give our schema to the builder and provide the result to Sanity
export const schemaTypes = [
    // Document types
    page,
    person,
    route,
    siteConfig,

    // Sections

    // Object types
    address,
    cta,
    embedHTML,
    figure,
    hero,
    imageSection,
    internalLink,
    link,
    mailchimp,
    portableText,
    seo,
    simplePortableText,
    textSection,
]
