import groq from 'groq';

import { BASIC_TEXT_QUERY } from '~/components/base/Prose/components/BasicText/BasicText.query';

export const ORGANISATIONS_QUERY = groq`{
  _key,
  _type,
  heading,
  description[]{
    ${BASIC_TEXT_QUERY}
  },
  "organisations": *[_type == "organisation" && !(_id in path("drafts.**")) && hiddenOrg == false]{
    _id,
    name,
    url
  } | order(name asc)
}`;