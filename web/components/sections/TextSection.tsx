import React from 'react';

import SimpleBlockContent from '@/components/SimpleBlockContent';
import { TextSectionProps } from '@/lib/types';

const TextSection = ({ heading, label, text }: TextSectionProps) => {
  return (
    <div>
      <section>
        <div>{label}</div>
        <h2>{heading}</h2>
        {text && <SimpleBlockContent blocks={text} />}
      </section>
    </div>
  );
};

export default TextSection;
