import { Rule } from "sanity";

export default {
  name: 'address',
  title: 'Address',
  type: 'object',
  fields: [
    {
      name: 'street',
      title: 'Street',
      type: 'string',
    },
    {
      name: 'city',
      title: 'Town/Suburb',
      type: 'string',
    },
    {
      name: 'state',
      title: 'State',
      type: 'string',
      options: {
        list: ['ACT', 'NSW', 'NT', 'QLD', 'SA', 'TAS', 'VIC', 'WA'],
      },
    },
    {
      name: 'postcode',
      title: 'Postcode',
      type: 'string',
      validation: (Rule: Rule) =>
        Rule.required()
          .regex(/[0-9]{4}/)
          .warning('Should be 4 characters'),
    },
  ],
}
