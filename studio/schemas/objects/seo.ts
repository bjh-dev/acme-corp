import {Rule} from 'sanity'

export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  description: 'These settings are used to generate the SEO and Social Media settings',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Try to keep this between 10-70 characters for better SEO',
      validation: (Rule: Rule) => Rule.min(10).max(70),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'A short summary of the post (50-160 characters)',
      rows: 5,
      validation: (Rule: Rule) => Rule.min(50).max(160),
    },
    {
      name: 'accessibleImage',
      type: 'accessibleImage',
      title: 'Social Media Image',
      description: 'This image will be used when sharing this page on social media.',
      validation: (Rule: Rule) =>
        Rule.custom((fields: any) => {
          if (fields && fields.asset && typeof fields.alt === 'string') {
            return true
          }
          return 'Preview image: The image and an alt text is required'
        }),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      description: 'The alt text for the image',
      media: 'image',
    },
  },
}
