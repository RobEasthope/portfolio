import groq from 'groq';

export const FOOTER_QUERY = groq`
  *[_type== 'Footer' ][0]{
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
