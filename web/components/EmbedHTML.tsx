import { EmbedHTMLProps } from '@/lib/types';
import React from 'react';

const EmbedHTML = ({ node }: EmbedHTMLProps) => {
  const { html } = node;
  if (!html) {
    return undefined;
  }
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default EmbedHTML;
