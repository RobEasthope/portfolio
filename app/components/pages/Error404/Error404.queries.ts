import groq from 'groq';

import { FOOTER_QUERY } from '~/components/navigation/Footer/Footer.query';
import { HEADER_QUERY } from '~/components/navigation/Header/Header.query';

import { METADATA_FALLBACKS_QUERY } from '~/components/settings/MetadataFallbacks/MetadataFallbacks.query';

export const ERROR_404_QUERY = groq`{
  "page": *[_type == "Error404" && !(_id in path("drafts.**"))][0]{
    _type,
    logo,
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
  "header": ${HEADER_QUERY},
  "footer": ${FOOTER_QUERY},
  "fallbacks": ${METADATA_FALLBACKS_QUERY},
}`;
