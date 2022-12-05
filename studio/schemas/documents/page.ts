import {GoBrowser} from 'react-icons/go'
import {DocumentComponents, Rule} from 'sanity'

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  icon: GoBrowser,
  groups: [{name: 'content', title: 'Content', default: true}],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      group: 'content',
      description: 'Short title for the page',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'descriptiveTitle',
      type: 'string',
      title: 'Descriptive Title',
      group: 'content',
      description: 'Try to keep this between 10-70 characters for better SEO',
      validation: (Rule: Rule) => Rule.min(10).max(70).required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      group: 'content',
      description:
        'A short summary of the post (50-160 characters). If no description is provided the default one from your Site Settings will be used.',
      rows: 5,
      validation: (Rule: Rule) => Rule.min(50).max(160),
    },
    {
      name: 'accessibleImage',
      type: 'accessibleImage',
      title: 'Social Media Image',
      group: 'content',
      description:
        'This image will be used when sharing this page on social media. If no image is provided the default one from your Site Settings will be used.',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      group: 'content',
      of: [{type: 'hero'}, {type: 'imageSection'}, {type: 'mailchimp'}, {type: 'textSection'}],
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'accessibleImage',
    },
  },
}
