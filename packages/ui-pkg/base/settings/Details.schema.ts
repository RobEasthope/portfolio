export default defineType({
  name: "details",
  title: "Details",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email address",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["mailto"],
        }),
    },
    {
      name: "phoneNumber",
      title: "Phone number",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["tel"],
        }),
    },
    {
      name: "twitter",
      title: "Twitter profile",
      type: "url",
    },
    {
      name: "linkedin",
      title: "LinkedIn profile",
      type: "url",
    },
    {
      name: "github",
      title: "Github profile",
      type: "url",
    },
    {
      name: "portfolioUrl",
      title: "Portfolio URL",
      type: "url",
    },
  ],

  preview: {
    select: {
      title: "title",
    },
  },
});
