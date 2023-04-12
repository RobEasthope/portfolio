import groq from 'groq';

export const FOOTER_QUERY = groq`
  *[_type== 'Footer' && !(_id in path("drafts.**"))][0]{
    "footerNavigation": rawFooterNavigation[]{
      _type,
      _key,
      title,
      url,
      "to": internalUID->{slug},
    },
    copyrightText,
  }
`;
