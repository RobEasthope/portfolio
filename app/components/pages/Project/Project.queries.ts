import groq from 'groq';

import { FOOTER_QUERY } from '~/components/navigation/Footer/Footer.query';
import { HEADER_QUERY } from '~/components/navigation/Header/Header.query';

import { METADATA_FALLBACKS_QUERY } from '~/components/settings/MetadataFallbacks/MetadataFallbacks.query';

const PROJECT_QUERY_BODY = groq`
  ...,
  _id,
  title,
  slug,
  "clientOrg": client->{name, url},
  "agencyOrg": agency->{name, url},
  "blocks": rawSections[]{
    ...,
    "link": rawLink[0]{..., "to": {...internalUID->{...},  }},
    "bkg": rawBkg->,
    "cards": rawCards[]{
      ...,
      "link": rawLink[0]{..., "to": {...internalUID->{...},  }},
      "bkg": rawBkg->,
    },
    "muxVideo": rawMuxVideo.asset->,
  },
  containLogo
`;

export const PROJECT_SLUGS_QUERY = groq`
  *[_type == "project" && !(_id in path("drafts.**")) && defined(slug.current)].slug.current
`;

export const PROJECT_BY_ID_QUERY = groq`
    "page": *[_type== 'project' && !(_id in path("drafts.**")) && _id == $id][0]{
      ${PROJECT_QUERY_BODY}
    },
    "header": ${HEADER_QUERY},
    "footer": ${FOOTER_QUERY},
    "fallbacks": ${METADATA_FALLBACKS_QUERY},
  }
`;

export const PROJECT_BY_SLUG_QUERY = groq`{
    "page": *[_type== 'project' && !(_id in path("drafts.**")) && slug.current == $slug][0]{
      ${PROJECT_QUERY_BODY}
    },
    "header": ${HEADER_QUERY},
    "footer": ${FOOTER_QUERY},
    "fallbacks": ${METADATA_FALLBACKS_QUERY},
  }
`;
