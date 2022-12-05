export default {
  type: 'object',
  name: 'textSection',
  title: 'Text',
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label',
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'isMultiColumn',
      type: 'boolean',
      title: 'Multi-column Text?',
      description: 'Split the text into multiple columns (depending on device size)',
      initialValue: false,
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'text',
      type: 'portableText',
      title: 'Text',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({heading}: any) {
      return {
        title: `${heading}`,
        subtitle: 'Text section',
      }
    },
  },
}
