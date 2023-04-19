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
  projectText[]{
      ...,
      "muxVideo": rawMuxVideo.asset->,
      "testimonial": rawTestimonial->,
      markDefs[]{
        ...,
        _type == "InternalLink" => {
          "page": @.internalUID->
        }
      }
    },
  containLogo,
  displayProject,
`;

export const PROJECT_SLUGS_QUERY = groq`
  *[_type == "project" && !(_id in path("drafts.**")) && defined(slug.current)].slug.current
`;

export const PROJECT_BY_ID_QUERY = groq`
    "page": *[_type== 'project' && !(_id in path("drafts.**")) && _id == $id][0]{
      ${PROJECT_QUERY_BODY}
    },
  }
`;

export const PROJECT_BY_SLUG_QUERY = groq`{
    "page": *[_type== 'project' && !(_id in path("drafts.**")) && slug.current == $slug][0]{
      ${PROJECT_QUERY_BODY}
    },
  }
`;
