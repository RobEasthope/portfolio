import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'Details',
  title: 'Contact details',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email address',
      type: 'string',
      validation: (Rule) =>
        Rule.custom((email) => {
          if (typeof email === 'undefined') {
            return true; // Allow undefined values
          }

          return email
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            )
            ? true
            : 'This is not an email';
        }),
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'twitterUrl',
      title: 'Twitter profile',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn profile',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'githubUrl',
      title: 'Github profile',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'portfolioUrl',
      title: 'Portfolio URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Contact details',
      };
    },
  },
});
