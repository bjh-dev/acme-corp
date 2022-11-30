import { PortableText } from '@portabletext/react';
import React from 'react';

import EmbedHTML from '@/components/EmbedHTML';
import Figure from '@/components/Figure';

interface SimpleBlockContentProps {
  blocks: any[];
}

const SimpleBlockContent = ({ blocks }: SimpleBlockContentProps) => {
  if (!blocks) {
    console.error('Missing blocks');
    return null;
  }

  return (
    <PortableText
      value={blocks}
      components={{
        types: {
          // @ts-ignore
          embedHTML: EmbedHTML,
          // @ts-ignore
          figure: Figure,
        },
      }}
    />
  );
};

export default SimpleBlockContent;
