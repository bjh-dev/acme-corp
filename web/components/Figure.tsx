import imageUrlBuilder from '@sanity/image-url';
import React from 'react';

import styles from '@/components/Figure.module.css';
import { client } from '@/lib/sanity';
import { FigureProps } from '@/lib/types';
const builder = imageUrlBuilder(client);

const Figure = ({ node }: FigureProps) => {
  const { alt, caption, asset } = node;
  if (!asset) {
    return undefined;
  }
  return (
    <figure className={styles.content}>
      <img
        src={builder.image(asset).auto('format').width(2000).url()}
        className={styles.image}
        alt={alt}
      />
      {caption && (
        <figcaption>
          <div className={styles.caption}>
            <div className={styles.captionBox}>
              <p>{caption}</p>
            </div>
          </div>
        </figcaption>
      )}
    </figure>
  );
};

export default Figure;
