import groq from 'groq';

import { INTERNAL_LINK_QUERY } from '~/components/base/InternalLink/InternalLink.query';

export const PROJECT_TEXT_QUERY = groq`
  ...,
  markDefs[]{
    ...,
    ${INTERNAL_LINK_QUERY},
  }
`;
