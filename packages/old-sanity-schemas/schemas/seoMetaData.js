export default {
  name: 'seoMetaData',
  title: 'SEO meta data',
  type: 'object',
  fields: [
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
