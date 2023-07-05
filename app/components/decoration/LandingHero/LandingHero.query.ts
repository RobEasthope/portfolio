import groq from 'groq';

import { SANITY_IMAGE_QUERY } from '~/components/base/SanityImage/SanityImage.query';

export const LANDING_HERO_QUERY = groq`{
  _type,
  _key,
  bkgMode,
  "bkgImage": bkgImage{${SANITY_IMAGE_QUERY}},
  "bkgVideo": rawMuxVideo.asset->,
  caption
}`;
