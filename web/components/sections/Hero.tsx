import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

import Cta from '@/components/Cta';
import SimpleBlockContent from '@/components/SimpleBlockContent';
import { client } from '@/lib/sanity';
import { HeroProps } from '@/lib/types';

function urlFor(source: SanityImageSource) {
  return imageUrlBuilder(client).image(source);
}

const Hero = ({ heading, backgroundImage, tagline, ctas }: HeroProps) => {
  const style = backgroundImage
    ? {
        backgroundImage: `url("${urlFor(backgroundImage)
          .width(2000)
          .auto('format')
          .url()}")`,
      }
    : {};

  return (
    <div>
      <div>
        <h1>{heading}</h1>
        <div>{tagline && <SimpleBlockContent blocks={tagline} />}</div>
        {ctas && (
          <div>
            {ctas.map((cta) => (
              <Cta {...cta} key={cta._key} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
