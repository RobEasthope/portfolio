import groq from 'groq';

import { SANITY_IMAGE_QUERY } from '~/components/_base/SanityImage/SanityImage.query';

export const GALLERY_IMAGE_QUERY = groq`
  _type,
  _key,
  "image": image{${SANITY_IMAGE_QUERY}},
  caption,
  aspectRatio,
  maxWidth,
`;
