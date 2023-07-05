import { RiExternalLinkLine } from 'react-icons/ri';
import { defineField, defineType } from 'sanity';

// const ExternalLinkRender = ({ children }) => (
//   <span>
//     {children} <RiExternalLinkLine />
//   </span>
// );

export default defineType({
  name: 'ExternalLink',
  title: 'External link',
  type: 'object',
  description: 'Add a link to outside the site',
  icon: RiExternalLinkLine,
  fields: [
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ['https', 'http', 'mailto', 'tel'],
        }),
    }),
  ],
  // blockEditor: {
  //   icon: () => "🔗",
  //   render: ExternalLinkRender,
  // },
  preview: {
    prepare() {
      return {
        title: 'External link',
      };
    },
  },
  // displayName: "ExternalLink",
});
