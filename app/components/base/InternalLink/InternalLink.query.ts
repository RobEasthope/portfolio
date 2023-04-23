import groq from 'groq';

import { APP_SETTINGS_QUERY } from '~/components/settings/AppSettings/AppSettings.queries';

export const INTERNAL_LINK_QUERY = groq`
  _type == "InternalLink" => {
      "page": @.internalUID->,
      "appSettings": ${APP_SETTINGS_QUERY}
    }
`;
