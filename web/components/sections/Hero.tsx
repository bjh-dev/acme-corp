import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';

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
  const myImage = urlFor(backgroundImage).width(2000).auto('format').url();

  return (
    <section>
      <div className="relative">
        <div className="relative sm:overflow-hidden">
          <div className="absolute inset-0">
            <Image
              className="h-full w-full object-cover"
              src={myImage}
              fill
              alt="People working on laptops"
            />
            <div className="absolute inset-0 bg-indigo-300 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <div className="container">
              <div className=" max-w-lg">
                <h2 className="text-4xl text-zinc-50 font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  {heading}
                </h2>
                <div className="text-zinc-50 pt-6 text-2xl">
                  {tagline && <SimpleBlockContent blocks={tagline} />}
                </div>
                <div className="pt-12">
                  {ctas && (
                    <div>
                      {ctas.map((cta) => (
                        <Cta {...cta} key={cta._key} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

{
  /* <div>
<div className="relative">
  <div className="absolute inset-x-0 bottom-0 h-1/2">
    <div className="container">
      <div className="relative">
        <div className="absolute inset-x-o">
          <Image src={myImage} alt={heading} fill />
        </div>
        <div className="relative">
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
    </div>
  </div>
</div>
</div> */
}
