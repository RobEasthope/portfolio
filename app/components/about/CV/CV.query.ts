import groq from 'groq';

import type { SanityPageByIdQueryProps } from '~/types/SanityPageByIdQueryProps';

import { METADATA_FALLBACKS_QUERY } from '~/components/settings/MetadataFallbacks/MetadataFallbacks.query';

import { SANITY_BLOCK_QUERIES } from '~/components/base/SanityBlocks/SANITY_BLOCK_QUERIES';

import { FOOTER_QUERY } from '~/components/navigation/Footer/Footer.query';
import { HEADER_QUERY } from '~/components/navigation/Header/Header.query';

// Fetch all page slugs
export const CV_SLUGS_QUERY = groq`
  *[_type == "CV" && !(_id in path("drafts.**")) && defined(slug.current)].slug.current
`;

// Fetch page id and components types by slug
export const CV_COMPONENT_TYPES_BY_SLUG_QUERY = groq`
  *[_type in ["CV"] && !(_id in path("drafts.**")) && slug.current == $slug][0]{
    "id": _id,
    "componentTypes": array::unique(rawSections[]._type),
  }
`;

// Fetch components types by id
export const CV_COMPONENT_TYPES_BY_ID_QUERY = groq`
  *[_type in ["CV"] && _id == $id][0]{
    "componentTypes": array::unique(rawSections[]._type),
  }
`;

// Fetch page data by id
export const CV_BY_ID_QUERY = ({
  id,
  componentTypes = [],
}: SanityPageByIdQueryProps) => {
  const hydratedSanityBlockQueries: any = SANITY_BLOCK_QUERIES();

  return groq`{
    "page": *[_id == "${id}"][0]{
      _id,
      title,
      slug,
      "sections": rawSections[_type in [${componentTypes?.map(
        (type: string) => `"${type}"`,
      )}]]{
        ${componentTypes
          .map(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            (type: string) =>
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-member-access
              `_type == "${type}" => ${hydratedSanityBlockQueries[type]}`,
          )
          .join(',')}
      }
    },
    "header": ${HEADER_QUERY},
    "footer": ${FOOTER_QUERY},
    "fallbacks": ${METADATA_FALLBACKS_QUERY},
  }`;
};
