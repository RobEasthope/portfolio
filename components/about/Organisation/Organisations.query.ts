import groq from 'groq';

import { BASIC_TEXT_QUERY } from '~/components/_base/Prose/components/BasicText/BasicText.query';

export const ORGANISATIONS_QUERY = groq`{
  _key,
  _type,
  heading,
  description[]{
    ${BASIC_TEXT_QUERY}
  },
  "organisations": *[_type == "organisation"  && hiddenOrg == false]{
    _id,
    name,
    url
  } | order(name asc)
}`;
