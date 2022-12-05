import imageUrlBuilder from '@sanity/image-url';
import React from 'react';

import { client } from '@/lib/sanity';
import { FigureProps } from '@/lib/types';
const builder = imageUrlBuilder(client);

const Figure = (props) => {
  const { value } = props;
  if (!value.asset) {
    return undefined;
  }
  return (
    <>
      <figure>
        <img
          src={builder.image(value.asset).auto('format').width(2000).url()}
          alt={value.alt}
        />
        {value.caption && (
          <figcaption>
            <div>
              <div>
                <p>{value.caption}</p>
              </div>
            </div>
          </figcaption>
        )}
      </figure>
    </>
  );
};

export default Figure;
