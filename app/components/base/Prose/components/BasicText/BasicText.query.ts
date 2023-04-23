import groq from 'groq';

import { INTERNAL_LINK_QUERY } from '~/components/base/InternalLink/InternalLink.query';

export const BASIC_TEXT_QUERY_BODY = groq`
  ...,
  markDefs[]{
    ...,
    ${INTERNAL_LINK_QUERY},
  }
`;
