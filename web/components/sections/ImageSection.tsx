import imageUrlBuilder from '@sanity/image-url';

import Cta from '@/components/Cta';
import SimpleBlockContent from '@/components/SimpleBlockContent';
import { client } from '@/lib/sanity';
import { ImageSectionProps } from '@/lib/types';

const builder = imageUrlBuilder(client);

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

  return (
    <div>
      <figure>
        <img
          src={builder.image(image).auto('format').width(2000).url()}
          alt={heading}
        />
        <figcaption>
          <div>
            <div>
              <div>{label}</div>
              <h2>{heading}</h2>
              {text && <SimpleBlockContent blocks={text} />}
              {cta && cta.route && <Cta {...cta} />}
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default ImageSection;
