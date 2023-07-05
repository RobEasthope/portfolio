import groq from 'groq';

import { FULL_TEXT_QUERY } from '~/components/_base/Prose/components/FullText/FullText.query';

export const TEXT_QUERY = groq`{
  _type,
  _key,
  text[]{
    ${FULL_TEXT_QUERY}
  },
}`;
