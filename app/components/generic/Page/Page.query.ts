import groq from 'groq';

import type { SanityPageByIdQueryProps } from '~/types/SanityPageByIdQueryProps';

import { SANITY_BLOCK_QUERIES } from '~/components/_base/SanityBlocks/SANITY_BLOCK_QUERIES';
import { SANITY_IMAGE_QUERY } from '~/components/_base/SanityImage/SanityImage.query';

// Fetch all page slugs
export const PAGE_SLUGS_QUERY = groq`
  *[_type == "Page"  && defined(slug.current)].slug.current
`;

// Fetch page id and components types by slug
export const PAGE_COMPONENT_TYPES_BY_SLUG_QUERY = groq`
  *[_type in ["Page"]  && slug.current == $slug][0]{
    "id": _id,
    "componentTypes": array::unique(rawSections[]._type),
  }
`;

// Fetch components types by id
export const PAGE_COMPONENT_TYPES_BY_ID_QUERY = groq`
  *[_type in ["Page"] && _id == $id][0]{
    "componentTypes": array::unique(rawSections[]._type),
  }
`;

// Fetch page data by id
export const PAGE_BY_ID_QUERY = ({
  id,
  componentTypes = [],
}: SanityPageByIdQueryProps) => {
  const hydratedSanityBlockQueries: any = SANITY_BLOCK_QUERIES();

  return groq`{
    "page": *[_id == "${id}"][0]{
      _id,
      title,
      slug,
      metadataDescription,
      metadataImage,
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
  }`;
};
