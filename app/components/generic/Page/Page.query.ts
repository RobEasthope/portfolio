import groq from 'groq';
import { SANITY_BLOCK_QUERIES } from '~/components/_base/SanityBlocks/SANITY_BLOCK_QUERIES';

// Fetch page id and components types by slug
export const PAGE_COMPONENT_TYPES_BY_SLUG_QUERY = ({
  slug,
}: {
  slug: string | undefined;
}) => {
  if (!slug) {
    throw new Error('You must provide a slug');
  }

  return groq`
  *[_type in ["Page"] && slug.current == '${slug}'][0]{
    "componentTypes": array::unique(rawSections[]._type),
  }
`;
};

export type PageBySlugQueryProps = {
  slug: string | undefined;
  componentTypes: string[];
};

// Fetch page data by id
export const PAGE_BY_SLUG_QUERY = ({
  slug,
  componentTypes = [],
}: PageBySlugQueryProps) => {
  if (!slug) {
    throw new Error('You must provide a slug');
  }

  const hydratedSanityBlockQueries: any = SANITY_BLOCK_QUERIES();

  return groq`
  *[_type in ["Page"] && slug.current == '${slug}'][0]{
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
  }`;
};
