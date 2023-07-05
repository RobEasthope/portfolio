import groq from 'groq';

import { SANITY_IMAGE_QUERY } from '~/components/base/SanityImage/SanityImage.query';

export const GALLERY_QUERY = groq`{
  _type,
  _key,
  "images": images[]{"image": image{${SANITY_IMAGE_QUERY}}},
  galleryCaption,
  columns,
  aspectRatio,
  maxWidth,
}`;
