import {GoBrowser} from 'react-icons/go'
import {Rule} from 'sanity'

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  icon: GoBrowser,
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata',
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title is used for nav menus and page headers (4-18 characters).',
      validation: (Rule: Rule) => Rule.required().min(4).max(18),
    },
    {
      name: 'descriptiveTitle',
      type: 'string',
      title: 'Descriptive title',
      description:
        'The descriptive title is used for SEO and social media previews (18-55 characters).',
      validation: (Rule: Rule) => Rule.required().min(18).max(55),
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [{type: 'hero'}, {type: 'imageSection'}, {type: 'mailchimp'}, {type: 'textSection'}],
    },
    {
      name: 'descriptionShort',
      type: 'text',
      title: 'Short Description',
      description: 'This description populates social media previews (20-60 characters)',
      fieldset: 'metadata',
      rows: 2,
      validation: (Rule: Rule) => Rule.required().min(18).max(60),
    },
    {
      name: 'descriptionLong',
      type: 'text',
      title: 'Long Description',
      description: 'This description is used by search engines (50-160 characters)',
      fieldset: 'metadata',
      rows: 5,
      validation: (Rule: Rule) => Rule.required().min(50).max(160),
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
      fieldset: 'metadata',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'altText',
      type: 'string',
      title: 'Alt text',
      description: 'Alt text for the open graph image. Important for SEO and accessibility.',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage',
    },
  },
}
