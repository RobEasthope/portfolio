import groq from 'groq';

import { SANITY_IMAGE_QUERY } from 'components/_base/SanityImage/SanityImage.query';

export const EDUCATION_QUERY = groq`{
  _key,
  _type,
  heading,
  "education": *[_type == "EduInstitution"  && defined(startDate)]{
    name,
    url,
    qualification,
    startDate,
    endDate,
    "logo": logo{${SANITY_IMAGE_QUERY}},
  } | order(startDate desc),
  
}`;
