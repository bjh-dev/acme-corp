export default {
  type: 'image',
  name: 'accessibleImage',
  title: 'Image with caption',
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description:
        'Important for SEO and accessiblity. Describe the image for visually impaired users.',
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      description: 'Optionally, provide a caption for the image (e.g. for image credits)',
      options: {
        isHighlighted: true,
      },
    },
  ],
}
