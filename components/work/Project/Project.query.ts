import groq from 'groq';
import { PROJECT_TEXT_QUERY } from 'components/_base/Prose/components/ProjectText/ProjectText.query';
import { SANITY_IMAGE_QUERY } from 'components/_base/SanityImage/SanityImage.query';

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
  "thumbnailImage": thumbnailImage{${SANITY_IMAGE_QUERY}},
  "thumbnailImageForMetadata": thumbnailImage,
  containLogo,
  displayProject,
`;

export const PROJECT_SLUGS_QUERY = groq`
  *[_type == "project"  && defined(slug.current)].slug.current
`;

export const PROJECT_BY_ID_QUERY = groq`
    "page": *[_type== 'project' && _id == $id][0]{
      ${PROJECT_QUERY_BODY}
    },
  }
`;

export const PROJECT_BY_SLUG_QUERY = groq`{
    "page": *[_type== 'project' && slug.current == $slug][0]{
      ${PROJECT_QUERY_BODY}
    },
  }
`;
