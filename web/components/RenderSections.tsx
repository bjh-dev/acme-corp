import React, { Fragment, ReactElement } from 'react';

import * as SectionComponents from '@/components/sections';
import Mailchimp from '@/components/sections/Mailchimp';
import capitalizeString from '@/lib/capitaliseString';
import { RenderSectionsProps, SectionProps } from '@/lib/types';

function resolveSections(section: SectionProps) {
  // @ts-ignore
  const Section = SectionComponents[capitalizeString(section._type)];

  if (section._type === 'mailchimp') {
    return Mailchimp;
  }

  if (Section) {
    return Section;
  }

  console.error('Cant find section', section); // eslint-disable-line no-console
  return null;
}

const RenderSections = ({ sections }: RenderSectionsProps) => {
  if (!sections) {
    console.error('Missing section');
    return <div>Missing sections</div>;
  }

  return (
    <Fragment>
      {sections.map((section) => {
        const SectionComponent = resolveSections(section);
        if (!SectionComponent) {
          return <div key="error">Missing section {section._type}</div>;
        }
        return <SectionComponent {...section} key={section._key} />;
      })}
    </Fragment>
  );
};

export default RenderSections;
