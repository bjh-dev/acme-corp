import React from 'react';

import { EmbedHTMLProps } from '@/lib/types';

const EmbedHTML = ({ node }: EmbedHTMLProps) => {
  const { html } = node;
  if (!html) {
    return undefined;
  }
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default EmbedHTML;
