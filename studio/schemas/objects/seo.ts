import {Rule} from 'sanity'

export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  description: 'These settings are used to generate the SEO and Social Media settings',
  fieldsets: [
    {
      name: 'socialImage',
      title: 'Social Media Image',
    },
  ],
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
      name: 'socialImage',
      type: 'image',
      title: 'Social Media Image',
      description:
        'This image will be used when sharing the post on social media. Facebook recommends an image size of 1200x630px',
      fieldset: 'socialImage',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imageAltText',
      type: 'string',
      title: 'Image Alt Text',
      fieldset: 'socialImage',
      description: 'The image that will be used in the SEO and Social Media',
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
