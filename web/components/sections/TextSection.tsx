import React from 'react';

import SimpleBlockContent from '@/components/SimpleBlockContent';
import { TextSectionProps } from '@/lib/types';

const TextSection = ({ heading, label, text }: TextSectionProps) => {
  return (
    <div>
      <section>
        <div className="bg-zinc-200 dark:bg-zinc-700 py-12">
          <div className="container">
            <div className="uppercase text-indigo-600 dark:text-indigo-500 font-bold text-sm">
              {label}
            </div>
            <h2 className="text-5xl font-light">{heading}</h2>
          </div>
        </div>
        <div className="container py-24 prose-zinc prose-lg prose-blockquote:border-l-2 prose-blockquote:border-indigo-300 prose-ul:list-disc two-columns">
          {text && <SimpleBlockContent blocks={text} />}
        </div>
      </section>
    </div>
  );
};

export default TextSection;
