export default {
  type: 'image',
  name: 'accessibleImage',
  title: 'Image with caption',
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      description: 'Describe the image for visually impaired users.',
      options: {
        isHighlighted: true,
      },
    },
  ],
}
