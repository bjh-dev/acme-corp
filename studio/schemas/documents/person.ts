import {GoPerson} from 'react-icons/go'

export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  icon: GoPerson,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'facebookProfile',
      title: 'Facebook Profile',
      type: 'string',
      options: {
        prepend: 'https://facebook.com/',
      },
    },
    {
      name: 'instagramProfile',
      title: 'Instagram Profile',
      type: 'string',
      options: {
        prepend: 'https://instagram.com/',
      },
    },
    {
      name: 'twitterProfile',
      title: 'Twitter Profile',
      type: 'string',
      options: {
        prepend: 'https://twitter.com/',
      },
    },
  ],
}
