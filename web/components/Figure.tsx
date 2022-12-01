import imageUrlBuilder from '@sanity/image-url';
import React from 'react';

import { client } from '@/lib/sanity';
import { FigureProps } from '@/lib/types';
const builder = imageUrlBuilder(client);

const Figure = ({ node }: FigureProps) => {
  const { alt, caption, asset } = node;
  if (!asset) {
    return undefined;
  }
  return (
    <figure>
      <img
        src={builder.image(asset).auto('format').width(2000).url()}
        alt={alt}
      />
      {caption && (
        <figcaption>
          <div>
            <div>
              <p>{caption}</p>
            </div>
          </div>
        </figcaption>
      )}
    </figure>
  );
};

export default Figure;
