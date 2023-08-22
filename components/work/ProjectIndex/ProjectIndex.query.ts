import groq from 'groq';

import { SANITY_IMAGE_QUERY } from 'components/_base/SanityImage/SanityImage.query';

export const PROJECT_INDEX_QUERY = groq`{
  _key,
  _type,
  "projects": *[_type == "project"  && defined(slug.current) && defined(endDate)]{
    title,
    slug,
    "thumbnailImage": thumbnailImage{${SANITY_IMAGE_QUERY}},
    containLogo,
    endDate,
    displayProject
  } | order(endDate desc)
}`;
