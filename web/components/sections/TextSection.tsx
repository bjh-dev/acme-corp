import React from 'react';

import styles from '@/components/sections/TextSection.module.css';
import SimpleBlockContent from '@/components/SimpleBlockContent';
import { TextSectionProps } from '@/lib/types';

const TextSection = ({ heading, label, text }: TextSectionProps) => {
  return (
    <div className={styles.root}>
      <section className={styles.article}>
        <div className={styles.label}>{label}</div>
        <h2 className={styles.heading}>{heading}</h2>
        {text && <SimpleBlockContent blocks={text} />}
      </section>
    </div>
  );
};

export default TextSection;
