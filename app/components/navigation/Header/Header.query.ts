import groq from 'groq';

import { APP_SETTINGS_QUERY } from '~/components/settings/AppSettings/AppSettings.query';

export const HEADER_QUERY = groq`
  *[_type== 'Header' && !(_id in path("drafts.**"))][0]{
    logo,
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
