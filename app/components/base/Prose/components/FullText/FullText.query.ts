import groq from 'groq';

import { APP_SETTINGS_QUERY } from '~/components/settings/AppSettings/AppSettings.queries';

export const FULL_TEXT_QUERY_BODY = groq`
  ...,
  markDefs[]{
    ...,
    _type == "InternalLink" => {
      "page": @.internalUID->,
      "appSettings": ${APP_SETTINGS_QUERY}
    }
  }
`;
