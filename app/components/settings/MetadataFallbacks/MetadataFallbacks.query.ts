import groq from 'groq';

export const METADATA_FALLBACKS_QUERY = groq`
  *[_type== 'MetadataFallbacks' && !(_id in path("drafts.**"))][0]{
    sitename,
    canonicalUrl,
    titleFallback,
    descriptionFallback,
    thumbnailFallback
  }
`;
