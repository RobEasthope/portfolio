import groq from 'groq';

import { APP_SETTINGS_QUERY } from '~/components/settings/AppSettings/AppSettings.queries';

export const TEXT_QUERY = groq`{
  _type,
  _key,
  text[]{
    ...,
    markDefs[]{
      ...,
      _type == "InternalLink" => {
        "page": @.internalUID->,
        "appSettings": ${APP_SETTINGS_QUERY}
      }
    },
  },
}`;
