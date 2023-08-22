import groq from 'groq';

export const METADATA_FALLBACKS_QUERY = groq`
  *[_type== 'MetadataFallbacks' ][0]{
    sitename,
    canonicalUrl,
    title,
    description,
    thumbnail,
  }
`;
