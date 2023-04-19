import groq from 'groq';

export const ERROR_404_QUERY = groq`{
  "page": *[_type == "Error404" && !(_id in path("drafts.**"))][0]{
    _type,
    logo,
    heading,
    subheading,
    "cards": rawCards[]{
      heading,
      description,
      "link": {
        "to": internalUID->{slug}
      }
    },
    goBackTitle,
  },
}`;
