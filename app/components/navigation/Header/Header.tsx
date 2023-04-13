import type { LoaderArgs } from '@vercel/remix';
import { Box } from '~/components/base/Box/Box';
import { Type } from '~/components/base/Type/Type';
import { SmallNavigation } from '~/components/navigation/SmallNavigation/SmallNavigation';
import type { ExternalLinkWithTitleSchemaProps } from '~/components/base/ExternalLink/ExternalLink';
import type { InternalLinkWithTitleSchemaProps } from '~/components/base/InternalLink/InternalLink';
import { InternalLink } from '~/components/base/InternalLink/InternalLink';
import { SuperLink } from '~/components/base/SuperLink/SuperLink';
import Headroom from 'react-headroom';
import type {
  SanityImageAsset,
  SanityImageCrop,
  SanityReference,
} from 'sanity-codegen';
import { HOME_PAGE_SLUG } from '~/components/pages/Page/constants/HOME_PAGE_SLUG';
import type { EmailLinkWithTitleSchemaProps } from '~/components/base/EmailLink/EmailLink';
import { SanityImage } from '~/components/base/SanityImage/SanityImage';
import { METADATA_HARD_CODED_FALLBACKS } from '~/components/config/METADATA_HARD_CODED_FALLBACKS';

// TYPES
export type HeaderProps = {
  _type?: 'Header';
  logo?: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    attribution?: string;
  };
  primaryNavigation:
    | [
        | ExternalLinkWithTitleSchemaProps
        | InternalLinkWithTitleSchemaProps
        | EmailLinkWithTitleSchemaProps,
      ]
    | null;
  secondaryNavigation:
    | [
        | ExternalLinkWithTitleSchemaProps
        | InternalLinkWithTitleSchemaProps
        | EmailLinkWithTitleSchemaProps,
      ]
    | null;
};

export const config = { runtime: 'edge' };

export const loader = async ({ request, params }: LoaderArgs) => {
  const primer: SanityPageByIdQueryProps = await sanityAPI.fetch(
    PAGE_COMPONENT_TYPES_BY_SLUG_QUERY,
    {
      slug:
        // If the router returns the app root pass in the home page slug. Other wise just pass in the page slug
        params?.slug?.length > 0
          ? createSlugFromQuery(params?.slug)
          : HOME_PAGE_SLUG,
    },
  );

  const payload = await sanityAPI
    .fetch(
      PAGE_BY_ID_QUERY({
        id: primer?.id,
        componentTypes: primer?.componentTypes,
      }),
    )
    .then((result) => (result ? articleZ.parse(result) : null));

  if (!payload) {
    throw new Response(`Page not found`, { status: 404 });
  }

  return json({
    payload,
    query: preview ? articleQuery : null,
    params: preview ? params : null,
  });
};

// MARKUP
export const Header = ({
  logo,
  primaryNavigation,
  secondaryNavigation,
}: HeaderProps) => {
  if (!logo && !primaryNavigation) {
    return null;
  }

  return (
    <Headroom>
      <Box as="header" className="bg-white px-1 py-0.5">
        <Box
          as="nav"
          className="mx-auto flex w-full flex-row-reverse flex-wrap items-center justify-between leading-4 md:flex-row"
        >
          <Box as="ul" className="hidden flex-row gap-1 md:flex">
            {primaryNavigation?.map((nav) => (
              <Type as="li" key={nav?._key} className="text-sm font-medium">
                <SuperLink
                  link={nav}
                  className="decoration-2 underline-offset-2 hover:underline"
                >
                  {nav.title}
                </SuperLink>
              </Type>
            ))}
          </Box>

          <Box
            as="div"
            className="absolute left-1/2 flex flex-1 -translate-x-1/2 items-center justify-center"
          >
            <InternalLink href={HOME_PAGE_SLUG}>
              <Box as="span" className="sr-only">
                {METADATA_HARD_CODED_FALLBACKS.TITLE}
              </Box>
              <SanityImage
                asset={logo}
                alt={METADATA_HARD_CODED_FALLBACKS.TITLE}
                mode="contain"
                maxWidth={200}
                className="h-1.25"
              />
            </InternalLink>
          </Box>

          <Box as="ul" className="hidden flex-row gap-1  md:flex">
            {secondaryNavigation?.map((nav) => (
              <Type as="li" key={nav?._key} className="text-sm font-medium">
                <SuperLink
                  link={nav}
                  className="decoration-2 underline-offset-2 hover:underline"
                >
                  {nav.title}
                </SuperLink>
              </Type>
            ))}
          </Box>
          <SmallNavigation
            logo={logo}
            primaryNavigation={primaryNavigation}
            secondaryNavigation={secondaryNavigation}
          />
        </Box>
      </Box>
    </Headroom>
  );
};
