import groq from 'groq';

import { INTERNAL_LINK_QUERY } from '~/components/_base/InternalLink/InternalLink.query';

export const BASIC_TEXT_QUERY = groq`
  ...,
  markDefs[]{
    ...,
    ${INTERNAL_LINK_QUERY},
  },
`;
