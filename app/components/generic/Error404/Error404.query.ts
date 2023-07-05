import groq from 'groq';

import { SANITY_IMAGE_QUERY } from '~/components/_base/SanityImage/SanityImage.query';

export const ERROR_404_QUERY = groq`{
  "page": *[_type == "Error404" ][0]{
    _type,
    "logo": logo{${SANITY_IMAGE_QUERY}},
    heading,
    subheading,
    "cards": rawCards[]{
      heading,
      description,
      "link": {
        "to": internalUID->{slug}
      }
    },
    goBackTitle,
  },
}`;
