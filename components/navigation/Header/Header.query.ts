import groq from 'groq';

import { APP_SETTINGS_QUERY } from '~/components/settings/AppSettings/AppSettings.query';

import { SANITY_IMAGE_QUERY } from '~/components/_base/SanityImage/SanityImage.query';

export const HEADER_QUERY = groq`
  *[_type== 'Header' ][0]{
    "logo": logo{${SANITY_IMAGE_QUERY}},
    "primaryNavigation": rawPrimaryNavigation[]{
      _type,
      _key,
      title,
      url,
      email,
      "to": internalUID->{slug},
    },
    "secondaryNavigation": rawSecondaryNavigation[]{
      _type,
      _key,
      title,
      url,
      email,
      "to": internalUID->{slug},
    },
    "appSettings": ${APP_SETTINGS_QUERY}
  }
`;
