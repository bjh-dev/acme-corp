import {GoGear} from 'react-icons/go'
import * as bcp47 from 'bcp-47'
import {Rule} from 'sanity'
const RegexHandle = '/(^|[^@w])@(w{1,15})\b/'

export default {
  name: 'site-config',
  type: 'document',
  title: 'Site configuration',
  icon: GoGear,
  groups: [
    {name: 'general', title: 'Site', default: true},
    {name: 'business', title: 'Business Details'},
    {name: 'seo', title: 'SEO Defaults'},
    {name: 'thirdParty', title: '3rd Party'},
  ],
  fieldsets: [
    {name: 'footer', title: 'Footer'},
    {
      name: 'postalAddress',
      title: 'Postal Address',
      collapsible: false,
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site title',
      group: 'general',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'The main site url. Used to create canonical url',
      group: 'general',
    },
    {
      name: 'frontpage',
      type: 'reference',
      description: 'Choose page to be the frontpage',
      to: {type: 'page'},
      group: 'general',
    },
    {
      title: 'Site language',
      description: 'Should be a valid bcp47 language code like en, en-US, no or nb-NO',
      name: 'lang',
      type: 'string',
      validation: (Rule: Rule) =>
        Rule.custom((lang: string) => (bcp47.parse(lang) ? true : 'Please use a valid bcp47 code')),
      group: 'general',
    },
    {
      title: 'Brand logo',
      name: 'logo',
      type: 'image',
      group: 'general',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
        },
      ],
    },
    {
      name: 'facebookId',
      type: 'string',
      title: 'Facebook App ID',
      description: 'Find out more https://bit.ly/3SdLEeF',
      group: 'thirdParty',
    },
    {
      name: 'facebookPageUrl',
      type: 'url',
      title: 'Facebook Page URL',
      description: 'Enter the full url to your Facebook page',
      group: 'thirdParty',
    },
    {
      name: 'instagramHandle',
      type: 'string',
      title: 'Instagram Handle',
      description: 'Enter your Instagram profile handle (with @)',
      group: 'thirdParty',
      validation: (Rule: Rule) => Rule.regex(/(^|[^@\w])@(\w{1,15})\b/, {name: '@handle'}),
    },
    {
      name: 'twitterHandle',
      type: 'string',
      title: 'Twitter Handle',
      description: 'Enter your Twitter handle (with @)',
      group: 'thirdParty',
      validation: (Rule: Rule) => Rule.regex(/(^|[^@\w])@(\w{1,15})\b/, {name: '@handle'}),
    },
    {
      name: 'googleAnalyticsId',
      type: 'string',
      title: 'Google Analytics ID',
      group: 'thirdParty',
    },
    {
      name: 'youtubeUrl',
      type: 'url',
      title: 'YouTube Channel URL',
      description: 'Enter the full url to your YouTube channel',
      group: 'thirdParty',
    },
    {
      title: 'Main navigation',
      name: 'mainNavigation',
      description: 'Select pages for the top menu',
      group: 'general',
      validation: (Rule: Rule) => [
        Rule.max(5).warning('Are you sure you want more than 5 items?'),
        Rule.unique().error('You have duplicate menu items'),
      ],
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'route'}],
        },
      ],
    },
    {
      title: 'Footer navigation items',
      name: 'footerNavigation',
      type: 'array',
      validation: (Rule: Rule) => [
        Rule.max(10).warning('Are you sure you want more than 10 items?'),
        Rule.unique().error('You have duplicate menu items'),
      ],
      fieldset: 'footer',
      group: 'general',
      of: [
        {
          type: 'reference',
          to: [{type: 'route'}],
        },
      ],
    },
    {
      name: 'footerText',
      type: 'simplePortableText',
      fieldset: 'footer',
      group: 'general',
    },
    {
      name: 'legalName',
      title: 'Legal Entity Name',
      description: 'Legal entity as registered with the ATO. (i.e. "John Smith" or "XYZ Pty Ltd").',
      type: 'string',
      group: 'business',
    },
    {
      name: 'tradingName',
      title: 'Trading Name',
      description:
        'Your registered business name under which you trade (i.e. "John\'s BBQ Shack").',
      type: 'string',
      group: 'business',
    },
    {
      name: 'businessPhone',
      title: 'Phone',
      type: 'string',
      group: 'business',
    },
    {
      name: 'businessEmail',
      title: 'Email',
      type: 'string',
      validation: (Rule: Rule) =>
        Rule.regex(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      group: 'business',
    },
    {
      name: 'abn',
      title: 'ABN/ACN',
      type: 'string',
      group: 'business',
    },
    {
      name: 'address',
      title: 'Business Address',
      type: 'address',
      group: 'business',
    },
    {
      name: 'isPostalAddressSame',
      title: 'Is the postal address the same as the business address?',
      type: 'boolean',
      fieldset: 'postalAddress',
      initialValue: true,
      options: {
        layout: 'checkbox',
      },
      group: 'business',
    },
    {
      name: 'postalAddress',
      title: 'Postal Address',
      type: 'address',
      fieldset: 'postalAddress',
      hidden: ({document}: any) => document.isPostalAddressSame,
      options: {
        collapsible: false,
      },
      group: 'business',
    },
    {
      name: 'contactName',
      title: 'Primary Contact Name',
      type: 'string',
      group: 'business',
    },
    {
      name: 'contactPhone',
      title: 'Primary Contact Phone',
      type: 'string',
      group: 'business',
    },
  ],
}
