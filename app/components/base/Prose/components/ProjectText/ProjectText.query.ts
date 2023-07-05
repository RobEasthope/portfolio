import groq from 'groq';

import { INTERNAL_LINK_QUERY } from '~/components/base/InternalLink/InternalLink.query';
import { SANITY_IMAGE_QUERY } from '~/components/base/SanityImage/SanityImage.query';

export const PROJECT_TEXT_QUERY = groq`
  ...,
  markDefs[]{
    ...,
    ${INTERNAL_LINK_QUERY},
  },
  "muxVideo": rawMuxVideo.asset->,
  "image": image{${SANITY_IMAGE_QUERY}},
  "images": images[]{"image": image{${SANITY_IMAGE_QUERY}}},
`;
