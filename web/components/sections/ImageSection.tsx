import imageUrlBuilder from '@sanity/image-url';

import Cta from '@/components/Cta';
import SimpleBlockContent from '@/components/SimpleBlockContent';
import { client } from '@/lib/sanity';
import { ImageSectionProps } from '@/lib/types';
import Image from 'next/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

function urlFor(source: SanityImageSource) {
  return imageUrlBuilder(client).image(source);
}
const ImageSection = ({
  heading,
  label,
  text,
  image,
  cta,
}: ImageSectionProps) => {
  if (!image) {
    return null;
  }

  const myImage = urlFor(image).width(2000).auto('format').url();

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
            <div className="absolute inset-0 bg-zinc-600 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <div className="container">
              <div className=" max-w-lg">
                <h2 className="text-indigo-600 text-sm uppercase font-bold tracking-tight">
                  <span className="bg-zinc-200 px-4 py-2">{heading}</span>
                </h2>
                <h3 className="text-4xl text-zinc-50 font-bold mt-6">
                  {label}
                </h3>
                <div className="text-zinc-50 py-12">
                  {text && <SimpleBlockContent blocks={text} />}
                </div>
                <div>
                  <Cta {...cta} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
