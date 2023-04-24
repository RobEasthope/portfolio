import groq from 'groq';

import { PROJECT_TEXT_QUERY } from '~/components/base/Prose/components/ProjectText/ProjectText.query';

import { FOOTER_QUERY } from '~/components/navigation/Footer/Footer.query';
import { HEADER_QUERY } from '~/components/navigation/Header/Header.query';

const PROJECT_QUERY_BODY = groq`
  _id,
  title,
  slug,
  "clientOrg": client->{name, url},
  "agencyOrg": agency->{name, url},
  projectText[]{
    ${PROJECT_TEXT_QUERY}
  },
  description,
  "technologies": techUsed[]->{
    _id,
    name,
    url,
  },
  date,
  startDate,
  endDate,
  projectUrlTitle,
  projectUrl,
  repoUrl,
  thumbnailImage,
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
    "header": ${HEADER_QUERY},
    "footer": ${FOOTER_QUERY},
  }
`;

export const PROJECT_BY_SLUG_QUERY = groq`{
    "page": *[_type== 'project' && !(_id in path("drafts.**")) && slug.current == $slug][0]{
      ${PROJECT_QUERY_BODY}
    },
    "header": ${HEADER_QUERY},
    "footer": ${FOOTER_QUERY},
  }
`;