import groq from 'groq';
import { GALLERY_IMAGE_QUERY } from '~/components/generic/Gallery/components/GalleryImage/GalleryImage.query';

import { INTERNAL_LINK_QUERY } from '~/components/_base/InternalLink/InternalLink.query';
import { SANITY_IMAGE_QUERY } from '~/components/_base/SanityImage/SanityImage.query';

export const FULL_TEXT_QUERY = groq`
  ...,
  markDefs[]{
    ...,
    ${INTERNAL_LINK_QUERY},
  },
  "muxVideo": rawMuxVideo.asset->,
  "image": image{${SANITY_IMAGE_QUERY}},
  "images": images[]{${GALLERY_IMAGE_QUERY}},
`;
