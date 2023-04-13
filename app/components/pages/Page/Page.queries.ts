import groq from 'groq';
import { SANITY_BLOCK_QUERIES } from '~/components/base/SanityBlocks/SANITY_BLOCK_QUERIES';
import type { SanityPageByIdQueryProps } from '~/types/SanityPageByIdQueryProps';
import { HEADER_QUERY } from '~/components/navigation/Header/Header.query';
import { FOOTER_QUERY } from '~/components/navigation/Footer/Footer.query';
import { METADATA_SETTINGS_QUERY } from '~/components/settings/MetadataSettings.query';

// Fetch all page slugs
export const PAGE_SLUGS_QUERY = groq`
  *[_type == "Page" && !(_id in path("drafts.**")) && defined(slug.current)].slug.current
`;

// Fetch page id and components types by slug
export const PAGE_COMPONENT_TYPES_BY_SLUG_QUERY = groq`
  *[_type in ["Page"] && !(_id in path("drafts.**")) && slug.current == $slug][0]{
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
  const hydratedSanityBlockQueries: Record<string, unknown> =
    SANITY_BLOCK_QUERIES({
      courseId: null,
    });

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
              `_type == "${type}" => ${hydratedSanityBlockQueries[type]}`,
          )
          .join(',')}
      }
    },
    "header": ${HEADER_QUERY},
    "footer": ${FOOTER_QUERY},
    "error404": *[_type == "Error404" && !(_id in path("drafts.**"))][0]{
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
    "fallbacks": ${METADATA_SETTINGS_QUERY},
  }`;
};
